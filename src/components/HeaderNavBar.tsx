
import {
   BrowserRouter as Router,

   Link,
   useHistory,
 } from "react-router-dom";


import { useDispatch } from "react-redux";
import { Dispatch } from "redux"
import * as actions from "../redux/account_setup/actions";

const HeaderNavBar = () => {
   const history = useHistory();
   const dispatch: Dispatch<UserAction> = useDispatch();

   const logout = () => {
      document.cookie = 'token=;';
      history.push('/login');
      dispatch({ type: actions.REMOVE_USER });
   }

   return <div>
         <ul className="headernavbar">
            <li> <a id="dashboard-button"><Link to="/dashboard">Dashboard</Link></a></li>
            <li> <a><Link to="/aboutus">About Us</Link></a></li>
            <li> <a><Link to="/discover">Discover</Link></a></li>
            <li> <a><Link to="/profile">Profile</Link></a></li>
            <li> <a><button onClick={logout}>Log out</button></a></li>
         </ul>
      </div>
}

export default HeaderNavBar;