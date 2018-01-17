import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logUser } from '../actions'
import {Grid, Row, Col} from 'react-bootstrap';

import PostList from './PostList';
import FeaturedPost from './FeaturedPost';
import TopNavBar from './TopNavBar';

class App extends Component{

  render(){
    return(
      <div>
          <TopNavBar />
         <br/>

         <div>

         </div>
         <hr />
        <Grid>
      		<Row className="show-grid">
      			<Col xs={12} md={8}>
      			     <PostList />
      			</Col>
      			<Col xs={6} md={4}>
      				 <FeaturedPost />
      			</Col>
      		</Row>

        </Grid>


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
