import * as React from "react";
import Footer from "../common/Footer"
import GoalsList from "./GoalsList";
import {Goals} from "../../tsInterfaces/Goals"

function Dashboard(){
    const [userGoals, setUserGoals] = React.useState<Goals>({list: []});

    return <div> 
        <h2>Dashboard</h2>
        <GoalsList list={userGoals.list}/> 
        </div>
}

export default Dashboard;