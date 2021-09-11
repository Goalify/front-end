import * as React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/common/Footer';
import GoalsList from "./components/dashboard/GoalsList"
import {Goals} from "./tsInterfaces/Goals"
import Login from './components/account_setup/Login';

function App(props: Goals){

    return <div>
            {/* <HeaderNavBar list={props.list}/>
            <Footer /> */}
            <Login />
        </div>

}
export default App;