import * as React from 'react'
import {Goals, Goal} from '../../tsInterfaces/interfaces'
import {goal1, goal2, goal3} from "../../testcases/samples"


function GoalsList(){

    let response: Goals = {list: [goal1, goal2, goal3]};
    
    const [goals, setGoals] = React.useState<Goals>({list: response.list});

    const setGoal = (goal: Goal) => {
        const new_goals = goals.list.slice();

        let j = 0;
        for(let i=0;i<new_goals.length;i++){
            if(new_goals[i].id === goal.id){
                j = i;
                break;
            }
        }
        
        new_goals[j] = goal;
        setGoals({list: new_goals})
    }

    const deleteGoal = (goal: Goal) => {
        
        const old_goals = goals.list.slice();
        let new_goals: Goals = {list: []};

        for(let i=0;i<old_goals.length;i++){
            if(old_goals[i].id === goal.id){
                continue;
            }
            new_goals.list.push(old_goals[i]);
        }

        setGoals(new_goals);
    }

    const addGoal = () => {
        
    }

    let goalslist = <ul>
        {goals.list.map((goal, ind) => 
           <GoalItem goal={goal} setGoal={setGoal} deleteGoal={deleteGoal} />)}
        </ul>;

    return <div>
        <button onClick={addGoal}>+</button>
        {goalslist}
        </div>
}

export default GoalsList;