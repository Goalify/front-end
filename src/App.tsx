import * as React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/common/Footer';
import GoalsList from "./components/dashboard/GoalsList"
import {Goals} from "./tsInterfaces/Goals"
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/account_setup/Login';


import Register from './components/account_setup/Register';

function App(){
    
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

    return <div>
            <Router>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

                <Route exact path="/">
                    {isLoggedIn ? <Dashboard /> : <Register />}
                </Route>

                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/aboutus">
                    <AboutUs />
                </Route>
            
                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/discover">
                    Discover component to be implemented
                </Route>

            </Router>
        </div>

}
export default App;