import * as React from "react";
import GoalsList from "./GoalsList";
import {Goals} from "../../tsInterfaces/interfaces"
import {userToken} from '../../index'
import {useContext} from 'react'


function Dashboard(){
    const [userGoals, setUserGoals] = React.useState<Goals>({list: []});
    const curToken = useContext(userToken);
    console.log(curToken);

    return <div> 
        <h2>Dashboard</h2>
          <GoalsList />
        </div>
}

export default Dashboard;