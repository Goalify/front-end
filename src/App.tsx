import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/common/Footer';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/account_setup/Login';
import {useState, useContext, createContext} from 'react'
import { User } from './tsInterfaces/interfaces';
import Register from './components/account_setup/Register';
import HeaderNavBar from './components/HeaderNavBar';
import { authenticate } from './components/common/utilities';

function App(){
    
    const history = useHistory();
    
    if (!authenticate()){
        history.push('/login')
    }

    return <div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/aboutus">
                    <HeaderNavBar />
                    <AboutUs />
                    <Footer />
                </Route>
                
                <Route exact path="/">
                    
                    {authenticate() ? <div><HeaderNavBar /><Dashboard /></div> : <Register />}
                </Route>
                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/dashboard">
                    <HeaderNavBar />
                    <Dashboard />
                </Route>
               
            
                <Route path="/profile">
                    <HeaderNavBar />
                    <Profile />
                    <Footer />
                </Route>

                <Route path="/discover">
                    <HeaderNavBar />
                    <h2>Discover component to be implemented</h2>
                    <Footer />
                </Route>
                <Route path="/">
                    <HeaderNavBar />
                    <Dashboard />
                </Route>
            </Switch>

        </div>

}
export default App;