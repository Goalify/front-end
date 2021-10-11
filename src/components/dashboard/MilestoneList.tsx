import React, {useEffect, ChangeEvent} from "react";
import {Milestone} from "../../tsInterfaces/interfaces";
import {DbClickField} from "./Goal"
import {Modal, Button, Form} from 'react-bootstrap';
import { useAuth } from "hooks/useAuth";
import {stringify} from "querystring";

function MilestoneItem(props: {milestone: Milestone, setMilestone: any, deleteMilestone: any}){

    let milestone = props.milestone
    function edit_name(name: string){
        let new_milestone = JSON.parse(JSON.stringify(milestone));
        new_milestone.name = name;
        props.setMilestone(new_milestone);
    }
    const edit_state = (event:ChangeEvent<HTMLInputElement>) => {
        let new_milestone = JSON.parse(JSON.stringify(milestone));
        new_milestone.state = !new_milestone.state;
        props.setMilestone(new_milestone);
    }

    return(
        <div>
            <DbClickField className="milestone-item" text={milestone.name} setText={edit_name}></DbClickField>
            Completed: <input type="checkbox" checked={milestone.state} onChange={(event) => edit_state(event)}/>
            <button style={{"float":"none", "transform":"scale(0.7)"}} type="button" className="btn-close" aria-label="Close" onClick={() => {props.deleteMilestone(milestone)}}></button>
        </div>
    );
}

export function MilestonesList(props: {goal_id: string, milestonesList: Milestone[], editMilestoneList: any}){

    const [milestones, setMilestones] = React.useState<Milestone[]>(props.milestonesList);
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    const nameRef = React.useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    useEffect(() => {
        if(nameRef && nameRef.current){
            nameRef.current.focus()
        }
    }, [])

    
    const setMilestone = (milestone: Milestone) => {
        const new_milestones = milestones.slice();

        let j = 0;
        for(let i=0;i<new_milestones.length;i++){
            if(new_milestones[i].id === milestone.id){
                j = i;
                break;
            }
        }
        new_milestones[j] = milestone;

        let sent_milestone= {
            ...milestone,
            state: milestone.state.toString()
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                milestone: sent_milestone,
                token: auth?.token
            })
        }

        fetch('http://localhost:4001/edit-milestone', requestOptions)
            .then(response => {
                setMilestones(new_milestones);
                props.editMilestoneList(new_milestones);
            }).catch(e => console.log(e));

    }

    const deleteMilestone = (milestone: Milestone) => {
        
        const old_milestones = milestones.slice();
        let new_milestones: Milestone[] = [];

        for(let i=0;i<old_milestones.length;i++){
            if(old_milestones[i].id === milestone.id){
                continue;
            }
            new_milestones.push(old_milestones[i]);
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: milestone.id,
                token: auth?.token
            })
        }

        fetch('http://localhost:4001/remove-milestone', requestOptions)
            .then(response => {
                setMilestones(new_milestones);
                props.editMilestoneList(new_milestones);
            }).catch(e => console.log(e));
        }


    const handleKeyPress = (target: any) => {
        if(target.charCode === 13){
            target.preventDefault();
            addMilestone();
        } 
    }

    const addMilestone = () => {

        if(!nameRef || !nameRef.current)return;
        if(!nameRef.current.value){
            alert("Field Name shouldn't be empty")
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                milestone:{
                    name: nameRef.current.value,
                    goal_id: props.goal_id,
                    state: 'false',
                },
                token: auth?.token
            })
        }

        fetch('http://localhost:4001/add-milestone', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (!nameRef || !nameRef.current) return;
                let new_milestone: Milestone = {
                    id: data.id.toString(),
                    name: nameRef.current.value,
                    state: false,
                    goal_id: data.goal_id
                }
                const new_milestones = milestones.slice();
                new_milestones.push(new_milestone);
                setMilestones(new_milestones);
                setModalShow(false);
                props.editMilestoneList(new_milestones)
            });

    }


    let milestoneList = 
        <div>{milestones.map((milestone, ind) => 
           <MilestoneItem milestone={milestone} key={milestone.id} setMilestone={setMilestone} deleteMilestone={deleteMilestone} />)}</div>;

    return (
        <div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new milestone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required 
                            ref={nameRef} type="text" placeholder="Milestone name" onKeyPress={handleKeyPress}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={addMilestone}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>
            {milestoneList}
            <div style={{"paddingBottom": "7px"}}>
                <Button variant="primary" style={{"width": "20%", "margin": "auto"}} onClick={() => setModalShow(true)}>Add Milestone</Button>
            </div>
        </div>)
        
}