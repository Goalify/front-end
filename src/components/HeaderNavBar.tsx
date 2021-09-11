import * as React from "react";
import {Goals} from '../tsInterfaces/Goals'
import Profile from "./Profile";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Redirect
 } from "react-router-dom";

import AboutUs from "./AboutUs";
import Dashboard from "./dashboard/Dashboard";

const HeaderNavBar = (props: Goals) => {
        
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
               <Dashboard list={props.list}/>
            </Route>
            
            <Route path="/profile">
               <Profile />
            </Route>
            <Route path="/">
               <Dashboard list={props.list}/>
            </Route>
         </Switch>
      </Router>
      </div>

}

export default HeaderNavBar;