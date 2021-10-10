import * as React from "react";
import GoalsList from "./GoalsList";
import HeaderNavBar from "components/HeaderNavBar";
import Footer from "components/common/Footer";
import GoalStats from "./statistics/GoalStats";
import {goal1} from '../../testcases/samples'

function Dashboard(){

  return <div> 
        <HeaderNavBar />
          <GoalsList />
        <Footer />
      </div>
}

export default Dashboard;