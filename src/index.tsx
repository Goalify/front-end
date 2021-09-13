import React, {useState, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App"
import {Goal, Goals, User} from "./tsInterfaces/interfaces"

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Test1 } from './components/account_setup/test';


export const userToken = createContext({token: false, setToken: (token: boolean) => {}});

export function Index(){

  const [token, setToken] = useState<boolean>(false);

  return(
    <userToken.Provider value={{token: token, setToken: setToken}}>
      <Router>
        <App />
      </Router>
    </userToken.Provider>

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
