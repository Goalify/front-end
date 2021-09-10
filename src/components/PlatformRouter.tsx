import * as React from 'react'
import AboutUs from './AboutUs';
import Dashboard from './dashboard/Dashboard';
import {Goals} from '../tsInterfaces/Goals'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function PlatformRouter(props: Goals){
    return <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/aboutus"> About Us </Link>
                    </li>
                    <li>
                    <Link to="/dashboard"> Dashboard </Link>
                    </li>
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/aboutus">
                    <AboutUs />
                </Route>
                <Route path="/dashboard">
                    <Dashboard list={props.list}/>
                </Route>
                </Switch>
            </div>
        </Router>
}

export default PlatformRouter;