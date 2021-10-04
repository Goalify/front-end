import * as React from 'react'
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

    let timeToComplete = 0;
    

    return(<div>The goal is {completePercentage*100}% complete</div>)
}

export default GoalStats;