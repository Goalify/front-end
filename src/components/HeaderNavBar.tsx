import * as React from "react";
import {Goals} from '../tsInterfaces/interfaces'
import Profile from "./Profile";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

import AboutUs from "./AboutUs";
import Dashboard from "./dashboard/Dashboard";

const HeaderNavBar = () => {
        
   return <div>
      <Router>
         <ul className="headernavbar">
            <li> <a id="dashboard-button"><Link to="/dashboard">Dashboard</Link></a></li>
            <li> <a><Link to="/aboutus">About Us</Link></a></li>
            <li> <a><Link to="/profile">Profile</Link></a></li>
         </ul>
         <Switch>
            <Route path="/aboutus">
               <AboutUs />
            </Route>
            <Route path="/dashboard">
               <Dashboard />
            </Route>
            
            <Route path="/profile">
               <Profile />
            </Route>
            <Route path="/">
               <Dashboard />
            </Route>
         </Switch>
      </Router>
      </div>

}

export default HeaderNavBar;