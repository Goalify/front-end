import * as React from 'react'
import { goal1 } from 'testcases/samples';
import {Goals, Goal, Milestone} from '../../../tsInterfaces/interfaces'

function GoalStats(props: {goal: Goal}){

    const countCompletedMilstones = (milestones: Milestone[]) => {
        let count = 0;
        for(let i=0;i<milestones.length;i++){
            if(milestones[i].state){
                count++;
            }
        }
        return count;
    } 

    let completePercentage: number = 0;
    if(props.goal.milestones.length != 0){
        completePercentage = countCompletedMilstones(props.goal.milestones) / props.goal.milestones.length;   
    }

    // let timeSpent = 0;
    // if(props.goal.milestones.every((milestone) => milestone.state == true)){
    //     timeSpent = props.goal.dateFinished - props.goal.dateCreated;
    // }

    return(<div>{(completePercentage*100).toFixed(0)}% of milestones are complete</div>)
}

export default GoalStats;