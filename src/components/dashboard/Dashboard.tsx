import * as React from "react";
import GoalsList from "./GoalsList";
import {Goals} from "../../tsInterfaces/interfaces"

function Dashboard(){
    const [userGoals, setUserGoals] = React.useState<Goals>({list: []});

    return <div> 
        <h2>Dashboard</h2>
          <GoalsList list={userGoals.list}/> 
        </div>
}

export default Dashboard;