import * as React from "react";
import Footer from "../common/Footer"
import GoalsList from "./GoalsList";
import {Goals} from "../../tsInterfaces/Goals"

function Dashboard(props: Goals){

    return <div> 
        <h2>Dashboard</h2>
        <GoalsList list={props.list}/> 
        </div>
}

export default Dashboard;