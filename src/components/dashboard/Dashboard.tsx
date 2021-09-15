import * as React from "react";
import GoalsList from "./GoalsList";
import {Goals} from "../../tsInterfaces/interfaces"
import {useContext} from 'react'

import { useHistory } from 'react-router-dom';
import { authenticate } from '../common/utilities';

function Dashboard(){

  const history = useHistory();
  
  if(!authenticate()){
    history.push('/login');
  }

  const cat = localStorage.getItem('access_token');

  return <div> 
      <h2>Dashboard</h2>
        <GoalsList />
      </div>
}

export default Dashboard;