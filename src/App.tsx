import * as React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image';
import HeaderNavBar from './components/dashboard/HeaderNavBar';
import Footer from './components/common/Footer';
import PlatformRouter from './components/PlatformRouter'
import GoalsList from "./components/dashboard/GoalsList"
import {Goals} from "./tsInterfaces/Goals"

function App(props: Goals){

    return <div>
            <HeaderNavBar list={props.list}/>
            <Footer />
        </div>

}
export default App;