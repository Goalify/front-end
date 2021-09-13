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
                    <AboutUs />
                    <Footer />
                </Route>
                
                <Route exact path="/">
                    {currToken.token ? <Dashboard /> : <Register />}
                </Route>
                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/dashboard">
                    <Dashboard />
                    <Footer />
                </Route>
               
            
                <Route path="/profile">
                    <Profile />
                    <Footer />
                </Route>

                <Route path="/discover">
                    Discover component to be implemented
                </Route>
            </Switch>
        </div>

}
export default App;