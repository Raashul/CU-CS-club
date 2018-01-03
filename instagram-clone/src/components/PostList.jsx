import React, { Component } from 'react';
import {Nav, NavItem } from 'react-bootstrap';

import { posts } from '../firebase';

class PostList extends Component{

  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }


  componentDidMount(){
    posts.on('value', snap => {
      let posts = [];
      snap.forEach(post => {
        const serverKey = post.key;
        const {caption, pictureDownloadUrl} = post.val();
        posts.push({caption, pictureDownloadUrl, serverKey});
      });
      console.log('posts', posts);
      this.setState({
        posts: posts
      })

    })
  }

  render(){
    return(
      <div>
        <div className='main-post-div'>

          {this.state.posts.map((post, index) => {
            return (
              <div key={index}>
                <h3 className='post-caption'> <strong> {post.caption}</strong></h3>
                <img
                  src = {post.pictureDownloadUrl}
                  className='post-image' />

              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default PostList;
