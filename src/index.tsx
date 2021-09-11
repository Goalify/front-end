import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App"
import {Goal, Goals} from "./tsInterfaces/Goals"

let goal1: Goal = {
  state: "Done",
  name: "Goal 1",
  dateCreated: "8/Sep",
}

let goal2: Goal = {
  state: "In progress",
  name: "Goal 2",
  dateCreated: "10/Sep",
}
let goals: Goals = {list: [goal1, goal2]};

ReactDOM.render(
  <React.StrictMode>
    <App list={goals.list} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
