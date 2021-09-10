import * as React from 'react'
import {Goals, Goal} from '../../tsInterfaces/Goals'

let goal1: Goal = {
    state: "Done",
    name: "Goal 1",
    dateCreated: "8/Sep",
}
  
let goal2: Goal = {
    state: "In progress",
    name: "Goal 2",
    dateCreated: "10/Sep",
}
function GoalsList(props: Goals){

    const [goals, setGoals] = React.useState<Goals>({list: props.list});
    
    

    let gg = <ul>
        {goals.list.map((goal, ind) => {

            const handleClick = (ind: number) => {
                
                let new_goals = goals.list.slice()

                new_goals[ind].state = "Done"

                setGoals({list: new_goals});

            }
            
             return <li key={goal.name}>{goal.name}, Created on: {goal.dateCreated}, 
                    Status: {goal.state} <input type="button" value="Mark as Done"
                    onClick={() => handleClick(ind)}/></li>
        })}
        </ul>;

    return <div>{gg}</div>
}

export default GoalsList;