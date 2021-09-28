import * as React from 'react'
import {Goals, Goal, milestones} from '../../../tsInterfaces/interfaces'

function GoalStats(props: {goal: Goal}){

    const countCompletedMilstones = (milestones: milestones) => {
        let count = 0;
        for(let i=0;i<milestones.list.length;i++){
            if(milestones.list[i].state){
                count++;
            }
        }
        return count;
    } 
    let completePercentage: number = 0;
    if(props.goal.milestones.list.length != 0){
        completePercentage = countCompletedMilstones({list: props.goal.milestones.list}) / props.goal.milestones.list.length;
        
    }
    return(<div>The goal is {completePercentage*100}% complete</div>)
}

export default GoalStats;