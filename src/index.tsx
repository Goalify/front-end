import React, {useState, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App"
import {Goal, Goals, User} from "./tsInterfaces/interfaces"
import { authenticate, logOut } from './components/common/utilities';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import GoalStats from './components/dashboard/statistics/GoalStats';
import { goal1 } from './testcases/samples';

export function Index(){

  const history = useHistory();

  if(!authenticate()){
    if(history){
      history.push('/login');
    }
  }
  
  return(
      <Router>
        <App />
      </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
