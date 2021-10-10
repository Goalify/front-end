import React, { useEffect } from "react";
import {Goal, Milestone} from "../../tsInterfaces/interfaces";
import "./Goal.css"
import {MilestonesList} from "./MilestoneList"
import { Card, Button, Collapse, Modal, Form } from 'react-bootstrap';

export function DbClickField(props: {className?: string, text: string, setText: any}){

    const nameRef = React.useRef<any>();

    const [toggle, setToggle] = React.useState(true);    
    const [userText, setUserText] = React.useState(props.text);

    useEffect(() => {
        if(nameRef && nameRef.current){
            nameRef.current.focus()
        }
    }, [toggle])

    const handleBlur = () => {
        if(userText === ""){
            setUserText(props.text);
            setToggle(true);
            return;
        }
        setToggle(true);
        props.setText(userText);
    }

    return(
        toggle ? (
        <div className={props.className}
            placeholder="please enter some text"
            onDoubleClick={() => {
                setToggle(false)
            }}
        >{props.text}</div>
        ) : (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control 
                        ref = {nameRef}
                        onChange={(event) => { setUserText(event.target.value) }}
                        type="text" 
                        placeholder="Please enter some text"
                        value={userText}
                        onKeyDown={(event) => {if(event.key == "Enter") {handleBlur()}}}
                        onBlur={() => handleBlur()}
                />
                </Form.Group>
            </Form>

        )
    );
}

function GoalItem(props: {goal: Goal, setGoal: any, deleteGoal: any}) {
    
    let goal = props.goal;
    function edit_name(name: string){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.name = name;
        props.setGoal(new_goal);
    }
    function edit_description(description: string){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.description = description;
        props.setGoal(new_goal);
    }
    function edit_state(state: string){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.state = state;
        props.setGoal(new_goal);
    }
    function edit_published(published: boolean){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.published = published;
        props.setGoal(new_goal);
    }
    function edit_milestones(milestones: Milestone[]){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.milestones = milestones;
        props.setGoal(new_goal);
    }

    const [open, setOpen] = React.useState<boolean>(false);
    const statusColors = {
        Done: 'green',
        ToDo: 'cornflower-blue',
        InProgress: "#ad9c21",
        Failed: 'Red'
    }
    const statusStyle = {
        color: (statusColors as any)[goal.state],
        padding: "0",
        margin: "0",
    }

    return <div>
        <Card className="text-center"  >
            <Card.Header onClick={() => setOpen(!open)}>
                <DbClickField text={goal.name} setText={edit_name}></DbClickField>
            </Card.Header>
            <Card.Body style={{"padding": "0px"}}>     
                
                <Collapse in={open}>
                    <div style={{"margin": "auto"}}>
                        <div>
                            <select onChange={(value) => (edit_state(value.target.value))} value={goal.state}>
                                <option value="completed">Completed</option>
                                <option value="in progress">In Progress</option>
                                <option value="idle">Idle</option>
                            </select>
                            <select onChange={(value) => (edit_published((value.target.value === "public")))} value={goal.published ? "public" : "private"}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => {props.deleteGoal(goal)}}></button>
                        </div>
                        <Card.Text>
                            <DbClickField text={goal.description} setText={edit_description}></DbClickField>
                        </Card.Text>
                        <MilestonesList milestonesList = {goal.milestones} editMilestoneList = {edit_milestones}></MilestonesList>
                    </div>
                </Collapse>
            </Card.Body>

            <Card.Footer className="text-muted" style={{"padding": "1px"}}>{goal.dateCreated}</Card.Footer>
        </Card>
    </div>
}

export default GoalItem;