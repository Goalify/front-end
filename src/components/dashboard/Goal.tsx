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
        >{props.text}</p>
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
        let new_goal = JSON.parse(JSON.stringify(goal));
        new_goal.id = id;
        props.setGoal(new_goal);
    }
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

    function renderMilestones(){
        let milestoneList = [];
        for(var i = 0 ; i < props.goal.milestones.length ; i++){
            milestoneList.push(
                <div>
                    hello
                </div>
            )
        }
    }


    return(
        <div>
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
            </div>
        </div>
    );

}

export default GoalItem;