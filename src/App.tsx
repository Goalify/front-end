import * as React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/common/Footer';
import GoalsList from "./components/dashboard/GoalsList"
import {Goals} from "./tsInterfaces/Goals"
import Register from './components/account_setup/register';

function App(props: Goals){

    return <div>
            <Register></Register>
            {/* <HeaderNavBar list={props.list}/>
            <Footer /> */}
        </div>

}
export default App;