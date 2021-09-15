import * as React from 'react'
import {Goals, Goal} from '../../tsInterfaces/interfaces'
import {goal1, goal2, goal3, goal4} from "../../testcases/samples"
import GoalItem from './Goal';
import AddGoalForm from './AddGoalForm';


function GoalsList(){
    
    const [goals, setGoals] = React.useState<Goals>({list: [goal1, goal2]});
    const [visibileGoalForm, setVisibleGoalForm] = React.useState<boolean>(false);

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
        setGoals({list: new_goals});
        
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

    const showGoalForm = () => {
        setVisibleGoalForm(x => !x);
    }

    const addGoal = (goal: Goal) => {
        const new_goals = goals.list.slice();
        new_goals.push(goal);
        setGoals({list: new_goals});
    }

    let goalslist = <ul>
        {goals.list.map((goal, ind) => 
           <li key={goal.id}><GoalItem goal={goal} setGoal={setGoal} deleteGoal={deleteGoal} /></li>)}
        </ul>;

    return <div>
        <button onClick={showGoalForm}>+</button>
        {visibileGoalForm ? <AddGoalForm addGoal={addGoal}/>: null}
        {goalslist}
        </div>
}

export default GoalsList;