import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';
import logo from "./Goalify-logos.jpeg"

ReactDOM.render(
  <React.StrictMode>
    <img src={logo} width="500" height="500" className="logo"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
