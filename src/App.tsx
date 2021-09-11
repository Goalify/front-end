import * as React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/common/Footer';
import GoalsList from "./components/dashboard/GoalsList"
import {Goals} from "./tsInterfaces/Goals"
<<<<<<< HEAD
import Login from './components/account_setup/Login';
=======
import Register from './components/account_setup/register';
>>>>>>> 6e317b02efc351edb59eb40646beba91d68ae147

function App(props: Goals){

    return <div>
<<<<<<< HEAD
            {/* <HeaderNavBar list={props.list}/>
            <Footer /> */}
            <Login />
=======
            <Register></Register>
            {/* <HeaderNavBar list={props.list}/>
            <Footer /> */}
>>>>>>> 6e317b02efc351edb59eb40646beba91d68ae147
        </div>

}
export default App;