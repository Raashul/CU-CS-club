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
              <div key={index} className='post'>
                  <h3 className='post-username'>Rashul Rajbhandari</h3>

                  <img
                    src = {post.pictureDownloadUrl}
                    className='post-image'
                    alt = 'image'
                   />
                   <br />
                   <br />
                    <LoveCount post = {post}/>
                    <div className='caption'>
                      <p className='post-caption'>
                        <strong> Username </strong> {post.caption}
                      </p>
                     </div>

                    <hr />
                      {/* <div class="yourcomment">
                        <input class="commenthere"
                          type="text" placeholder="Add a comment..." />
                        </div> */}
                </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default PostList;
