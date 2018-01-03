import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { logUser, userRef } from '../actions'
import { read_cookie } from 'sfcookies';
import { Link } from 'react-router'

import PostList from './PostList';

class App extends Component{

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){

    return(
      <div>

        <div>
          <Link to ={'/post'}  className='btn btn-success'>Post Photos </Link>
         </div>
         <hr />

         <div className='featured-tags'>
            <button className='featured-buttons'>Funny</button>
            <button className='featured-buttons'>College</button>
            <button className='featured-buttons'>Nature</button>
            <button className='featured-buttons'>Technology</button>
            <button className='featured-buttons'>Technology</button>
            <button className='featured-buttons'>Technology</button>
            <button className='featured-buttons'>Technology</button>
         </div>

        <div>
          <h3>Posts</h3>
          <PostList />
        </div>
         <hr />

        <button
          className='btn btn-danger'
          onClick={() => this.signOut()}
          >
            Sign Out
          </button>
      </div>

    )
  }
}

function mapStateToProps(state){
  const {uid} = state;
  return {
    uid
  };
}


export default connect(mapStateToProps, {logUser}) (App);
