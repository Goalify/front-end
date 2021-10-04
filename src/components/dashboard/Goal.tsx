import React, { useEffect } from "react";
import {Goal} from "../../tsInterfaces/interfaces";
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
    function edit_published(published: string){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.published = (published === "public");
        props.setGoal(new_goal);
    }
    function edit_deadline(deadline: string){
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.deadline = deadline;
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
                        <select onChange={(value) => (edit_state(value.target.value))} value={goal.state}>
                            <option value="completed">Completed</option>
                            <option value="in progress">In Progress</option>
                            <option value="idle">Idle</option>
                        </select>
                        <Card.Text>
                            <DbClickField text={goal.description} setText={edit_description}></DbClickField>
                        </Card.Text>
                        <MilestonesList milestonesList = {goal.milestones}></MilestonesList>
                    </div>
                </Collapse>
            </Card.Body>

            <Card.Footer className="text-muted" style={{"padding": "1px"}}>{goal.dateCreated}</Card.Footer>
        </Card>
    </div>

    /*    <div>

            <div>
                <DbClickField text={goal.name} setText={edit_name}></DbClickField>
                <DbClickField text={goal.description} setText={edit_description}></DbClickField>
                <p>Created on: {goal.dateCreated}</p>
                <select onChange={(value) => (edit_state(value.target.value))} value={goal.state}>
                    <option value="completed">Completed</option>
                    <option value="in progress">In Progress</option>
                    <option value="idle">Idle</option>
                </select>
                <select onChange={(value) => (edit_published(value.target.value))} value={goal.published ? "Public" : "Private"}>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>
                <div className="deadline">
                    Deadline: <DbClickField text={goal.deadline} setText={edit_deadline}></DbClickField>
                </div>
                <MilestonesList milestonesList = {goal.milestones}></MilestonesList>
            </div>
        </div>
    );*/

}

export default GoalItem;