import * as React from "react";
import GoalsList from "./GoalsList";
import HeaderNavBar from "components/HeaderNavBar";
import Footer from "components/common/Footer";

function Dashboard(){

  return <div> 
        <HeaderNavBar />
          <GoalsList />
        <Footer />
      </div>
}

export default Dashboard;