import * as React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/common/Footer';
import GoalsList from "./components/dashboard/GoalsList"
import {Goals} from "./tsInterfaces/Goals"
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './components/account_setup/Login';
import {useState} from 'react'

import Register from './components/account_setup/Register';
import { couldStartTrivia } from 'typescript';

function App(){

    const [token, setToken] = useState<boolean>(false);
    const history = useHistory();
    console.log(history)
    
    if (!token){
        history.push('/register');
    }

    return <div>
            
                <Switch>


                <Route path="/aboutus">
                    <AboutUs />
                </Route>
                
                <Route exact path="/">
                    {token ? <Dashboard /> : <Register />}
                </Route>
                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/dashboard">
                    <Dashboard />
                </Route>
               
            
                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/discover">
                    Discover component to be implemented
                </Route>
               </Switch>
        </div>

}
export default App;