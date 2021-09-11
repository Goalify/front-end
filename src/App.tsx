import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/common/Footer';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/account_setup/Login';
import {useState} from 'react'

import Register from './components/account_setup/Register';

function App(){

    const [token, setToken] = useState<boolean>(false);
    const history = useHistory();
    console.log(history)
    
    if (!token){
        history.push('/register');
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
                    {token ? <Dashboard /> : <Register />}
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