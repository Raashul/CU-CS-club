import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { logUser } from '../actions'
import { Link } from 'react-router'

import PostList from './PostList';
import UserHeader from './UserHeader';
import FeaturedTags from './FeaturedTags';
import FeaturedPost from './FeaturedPost';

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
         <br/>
         <button
           className='btn btn-danger'
           onClick={() => this.signOut()}
           >
             Sign Out
           </button>
         <UserHeader username = {username}/>
         <hr />
         <FeaturedTags />
        <div>
          <h3>Posts</h3>
          <FeaturedPost />
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
