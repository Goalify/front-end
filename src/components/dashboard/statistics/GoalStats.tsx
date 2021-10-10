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

    let completePercentageElement: JSX.Element = <div></div>;
    if(props.goal.milestones.length != 0){

        let completePercentage: number = countCompletedMilstones(props.goal.milestones) / props.goal.milestones.length;   

        completePercentageElement = <div>The goal is {(completePercentage*100).toFixed(0)}% complete. {"   "}
         {countCompletedMilstones(props.goal.milestones)}/{props.goal.milestones.length} milestones finished.</div>
    }


    let timeSpentElement: JSX.Element = <div></div>;
    if(props.goal.milestones.every((milestone) => milestone.state == true)){
        let timeSpent: number = 0;
        if(props.goal.dateFinished) 
            timeSpent = new Date(props.goal.dateFinished).getTime() - new Date(props.goal.dateCreated).getTime();
        timeSpentElement = <div>
            Time spent: {msToTime(timeSpent)}
        </div>
    }

    function msToTime(s: number) {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        s = (s - mins) / 60;
        let hrs = s % 24;
        s = (s - hrs) / 24;
        let days = s;
      
        return days + " days, " + hrs + ' hours, ' + mins + ' minutes, and ' + secs + ' seconds';
    }

    let expectedTimeToFinishElement: JSX.Element = <div></div>;
    if(props.goal.milestones.length != 0){
        let completedMilestones: number = countCompletedMilstones(props.goal.milestones);
        let allMilestones: number = props.goal.milestones.length;
        if(completedMilestones !== 0 && completedMilestones !== allMilestones){
            let timeSpent: number = new Date().getTime() - new Date(props.goal.dateCreated).getTime();
            let expectedTime: number = (timeSpent / completedMilestones) * (allMilestones - completedMilestones);

            expectedTimeToFinishElement = <div>Expected time to finish the goal is: {msToTime(expectedTime)}</div>
        }
    }

    return(<div>
            {completePercentageElement}
            {timeSpentElement}
            {expectedTimeToFinishElement}
        </div>)
}

export default GoalStats;