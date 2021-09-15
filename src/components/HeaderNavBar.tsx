import * as React from "react";
import {Goals} from '../tsInterfaces/interfaces'
import Profile from "./Profile";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useHistory,
   Redirect
 } from "react-router-dom";

import AboutUs from "./AboutUs";
import Dashboard from "./dashboard/Dashboard";
import { logOut } from "./common/utilities";

const HeaderNavBar = () => {

   const [loggedOut, setLoggedout] = React.useState<boolean>(false);
   
   const history = useHistory();
   if(loggedOut){
      history.push('/login');
   }
   
   return <div>
         <ul className="headernavbar">
            <li> <a id="dashboard-button"><Link to="/dashboard">Dashboard</Link></a></li>
            <li> <a><Link to="/aboutus">About Us</Link></a></li>
            <li> <a><Link to="/discover">Discover</Link></a></li>
            <li> <a><Link to="/profile">Profile</Link></a></li>
            <li> <a><button onClick={() => {logOut(); setLoggedout(true);}}>Log out</button></a></li>
         </ul>
      </div>
}

export default HeaderNavBar;