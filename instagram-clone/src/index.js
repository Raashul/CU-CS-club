import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/Login';
import App from './components/App';
import SignUp from './components/SignUp';
import './style/style.css'

ReactDOM.render(
  <Router path="/" history ={browserHistory}>
    <Route path = '/' component={App}/>
    <Route path = '/login' component={Login}/>
    <Route path = '/signup' component={SignUp}/>

  </Router>, document.getElementById('root')
);
