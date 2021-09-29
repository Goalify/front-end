import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/common/Footer';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/account_setup/Login';
import Register from './components/account_setup/Register';
import HeaderNavBar from './components/HeaderNavBar';
import { authenticate } from './components/common/utilities';
import { useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth';


function App(){
    const auth = useAuth();
    const user = useSelector((state: UserState) => state.user);
    return <div>
        <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
                {(!auth && !user) && <Redirect to="/login" />}
            
                <Route path="/aboutus">
                    <HeaderNavBar />
                    <AboutUs />
                    <Footer />
                </Route>
              
                <Route path="/dashboard">
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
                    <Footer />
                </Route>
            </Switch>

        </div>

}
export default App;