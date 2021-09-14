import React from "react";
import {Goal, milestones} from "../../tsInterfaces/interfaces";

function GoalItem(props: {goal: Goal, setGoal: any, deleteGoal: any}) {
    let goal = props.goal;
    
    function edit_id(id: string){
        let new_goal: Goal = {
            id: id,
            name: goal.name,
            description: goal.description,
            dateCreated: goal.dateCreated,
            state: goal.state,
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
            milestones: goal.milestones
        }
        props.setGoal(new_goal);
    }

    return(
        <div>
            <div>
                <p>{goal.name}</p>
                <p>{goal.description}</p>
                <p>{goal.dateCreated}</p>
                <select id="lang" onChange={(value) => (edit_state(value.target.value))} value={goal.state}>
                    <option value="completed">Completed</option>
                    <option value="in progress">In Progress</option>
                    <option value="idle">Idle</option>
                </select>
            </div>
        </div>
    );

}

export default GoalItem;