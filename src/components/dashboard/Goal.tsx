import React, { useState } from "react";
import {Goal, milestones} from "../../tsInterfaces/interfaces";



function DbClickField(props: {text: string, setText: any}){
    const [toggle, setToggle] = React.useState(true);    
    const [userText, setUserText] = React.useState(props.text);


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
        <p
            placeholder="please enter some text"
            onDoubleClick={() => {
                setToggle(false)
            }}
        >{(props.text == "") ? "N/A" : props.text}</p>
        ) : (
        <input 
            autoFocus
            type='text'
            placeholder="please enter some text"
            value={userText}
            onChange={(event) => {setUserText(event.target.value)}}
            onKeyDown={(event) => {if(event.key == "Enter") {handleBlur()}}}
            onBlur={() => handleBlur()}
        />
        )
    );
}

function GoalItem(props: {goal: Goal, setGoal: any, deleteGoal: any}) {
    let goal = props.goal;
    
    function edit_id(id: string){
        let new_goal: Goal = {
            id: id,
            name: goal.name,
            description: goal.description,
            dateCreated: goal.dateCreated,
            state: goal.state,
            published: goal.published,
            deadline: goal.deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }
    function edit_name(name: string){
        let new_goal: Goal = {
            id: goal.id,
            name: name,
            description: goal.description,
            dateCreated: goal.dateCreated,
            state: goal.state,
            published: goal.published,
            deadline: goal.deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }
    function edit_description(description: string){
        let new_goal: Goal = {
            id: goal.id,
            name: goal.name,
            description: description,
            dateCreated: goal.dateCreated,
            state: goal.state,
            published: goal.published,
            deadline: goal.deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }
    function edit_dateCreated(dateCreated: string){
        let new_goal: Goal = {
            id: goal.id,
            name: goal.name,
            description: goal.description,
            dateCreated: dateCreated,
            state: goal.state,
            published: goal.published,
            deadline: goal.deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }
    function edit_state(state: string){
        let new_goal: Goal = {
            id: goal.id,
            name: goal.name,
            description: goal.description,
            dateCreated: goal.dateCreated,
            state: state,
            published: goal.published,
            deadline: goal.deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }
    function edit_published(published: string){
        let new_goal: Goal = {
            id: goal.id,
            name: goal.name,
            description: goal.description,
            dateCreated: goal.dateCreated,
            state: goal.state,
            published: (published === "Public"),
            deadline: goal.deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }
    function edit_deadline(deadline: string){
        let new_goal: Goal = {
            id: goal.id,
            name: goal.name,
            description: goal.description,
            dateCreated: goal.dateCreated,
            state: goal.state,
            published: goal.published,
            deadline: deadline,
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }

    return(
        <div>
            <div>
                <DbClickField text={goal.name} setText={edit_name}></DbClickField>
                <DbClickField text={goal.description} setText={edit_description}></DbClickField>
                <p>{goal.dateCreated}</p>
                <select onChange={(value) => (edit_state(value.target.value))} value={goal.state}>
                    <option value="completed">Completed</option>
                    <option value="in progress">In Progress</option>
                    <option value="idle">Idle</option>
                </select>
                <select onChange={(value) => (edit_published(value.target.value))} value={goal.published ? "Public" : "Private"}>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>

            </div>
        </div>
    );

}

export default GoalItem;