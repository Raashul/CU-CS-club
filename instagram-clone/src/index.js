import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
 import reducer from './reducers';

import Login from './components/Login';
import App from './components/App';
import SignUp from './components/SignUp';
import AddPost from './components/AddPost';
import Tag from './components/Tag';

import './style/style.css';


const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user =>{
  if(user){
     const {uid} = user;
     store.dispatch(logUser(uid));
     browserHistory.push('/app');
  } else{
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store ={store}>
    <Router path="/" history ={browserHistory}>
      <Route path = '/app' component={App}/>
      <Route path = '/signin' component={Login} />
      <Route path = '/signup' component={SignUp} />
      <Route path = '/post' component={AddPost} />
      <Route path ='/tags/:tag' component={Tag} />
    </Router>
  </Provider>, document.getElementById('root')
);
//
//
// ReactDOM.render(
//   <SignUp />, document.getElementById('root')
// )
