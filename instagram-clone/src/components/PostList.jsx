import React, { Component } from 'react';

import { posts } from '../firebase';
import LoveCount from './LoveCount';

class PostList extends Component{



  constructor(props){
    super(props);
    this.state = {
      posts: []
    };

  }


  componentWillMount(){
    console.log('componentWillMount');
    posts.on('value', snap => {
      let posts = [];
      snap.forEach(post => {
        const serverKey = post.key;
        let {caption, pictureDownloadUrl, totalLoves} = post.val();
        posts.push({caption, pictureDownloadUrl, serverKey, totalLoves});

      });
      console.log('posts', posts);
      this.setState({
        posts: posts,
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
                  className='post-image'
                  alt = 'image'
                 />
                  <LoveCount totalLoves = {post.totalLoves}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default PostList;
