import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/common/Footer';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/account_setup/Login';
import {useState, useContext, createContext} from 'react'
import { User } from './tsInterfaces/interfaces';
import Register from './components/account_setup/Register';
import {userToken} from './index'
import HeaderNavBar from './components/HeaderNavBar';

function App(){
    
    const history = useHistory();
    
    const currToken = useContext(userToken);
    console.log(currToken.token);

    if (!currToken.token){
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
                    {currToken.token != "" ? <div><HeaderNavBar /><Dashboard /><Footer /></div> : <Register />}
                </Route>
                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/dashboard">
                    <HeaderNavBar />
                    <Dashboard />
                    <Footer />
                </Route>
               
            
                <Route path="/profile">
                    <HeaderNavBar />
                    <Profile />
                    <Footer />
                </Route>

                <Route path="/discover">
                    Discover component to be implemented
                </Route>
                <Route path="/">
                    <HeaderNavBar />
                    <Dashboard />
                    <Footer />
                </Route>
            </Switch>

        </div>

}
export default App;