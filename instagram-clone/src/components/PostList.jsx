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
      this.setState({
        posts: posts,
      })
    })
  }




  render(){
    return(
      <div>
        <div className='main-post-div'>

          <p className="main-love-para">
            <i className="fa fa-heart fa-2x" aria-hidden="true"> </i>
            <strong>  Send you love as much as 10 times.</strong>
          </p>
          <p className="secondary-love-para">
            By sending your love, you can signal to us which story really stands out
          </p>
          <hr />

          {this.state.posts.map((post, index) => {
            return (
              <div key={index}>
                <h3 className='post-caption'> <strong> {post.caption}</strong></h3>
                <img
                  src = {post.pictureDownloadUrl}
                  className='post-image'
                  alt = 'image'
                 />
                 <hr />
                  <LoveCount post = {post}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default PostList;
