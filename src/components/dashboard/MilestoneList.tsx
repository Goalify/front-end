import React, {useState, useRef, FormEvent, useEffect, ChangeEventHandler, ChangeEvent} from "react";
import {Goal, Milestone} from "../../tsInterfaces/interfaces";
import {DbClickField} from "./Goal"
import {Modal, Button, Form, Card} from 'react-bootstrap';

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
        </div>
    );
}

export function MilestonesList(props: {milestonesList: Milestone[]}){

    const [milestones, setMilestones] = React.useState<Milestone[]>(props.milestonesList);
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    const nameRef = React.useRef<HTMLInputElement>(null);
    
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
        setMilestones(new_milestones);
        
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

        setMilestones(new_milestones);
    }

    const handleKeyPress = (target: any) => {
        if(target.charCode==13){
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
        const newMilestone: Milestone = {
            id: "new id",
            state: false,
            name: nameRef.current.value,
        }

        const new_milestones = milestones.slice();
        new_milestones.push(newMilestone);
        setMilestones(new_milestones);
        setModalShow(false);
    }


    let milestoneList = 
        <div>{milestones.map((milestone, ind) => 
           <MilestoneItem milestone={milestone} setMilestone={setMilestone} deleteMilestone={deleteMilestone} />)}</div>;

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