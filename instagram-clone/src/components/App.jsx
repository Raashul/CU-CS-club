import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { logUser, userRef } from '../actions'
import { read_cookie } from 'sfcookies';
import { Link } from 'react-router'

import PostList from './PostList';
import UserHeader from './UserHeader';


class App extends Component{

  signOut(){
    localStorage.removeItem('username');
    firebaseApp.auth().signOut();
  }

  render(){

    //pass username as prop to UserHeader
    const username = localStorage.getItem('username');

    return(
      <div>

        <div>
          <Link to ={'/post'}  className='btn btn-success'>Post Photos </Link>
         </div>
         <br />

         <button
           className='btn btn-danger'
           onClick={() => this.signOut()}
           >
             Sign Out
           </button>

         <UserHeader username = {username}/>

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
