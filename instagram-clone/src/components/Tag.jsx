import React, { Component } from 'react';
// import { Link } from 'react-router';

import LoveCount from './LoveCount';
import { posts } from '../firebase';

class TopNavBar extends Component{

constructor(props){
  super(props);
  this.state = {
    posts :[],
    noPosts: ''
  }

}


  componentWillMount(){

    posts.on('value', snap => {
      let posts = [];
      let noPosts = `No posts with #${this.props.params.tag} tag`
      snap.forEach(post => {
        const serverKey = post.key;
        let {caption, pictureDownloadUrl, totalLoves, tag} = post.val();
        if(tag === '#' + this.props.params.tag){
          posts.push({caption, pictureDownloadUrl, serverKey, totalLoves, tag});
          noPosts = '';
        }
      });
      this.setState({
        posts: posts,
        noPosts: noPosts
      })
    })
  }


  render(){
    console.log('props', this.props.params.tag);

    return(
      <div>
        <div className='no-posts'>
          <h3>{this.state.noPosts}</h3>
        </div>

        {this.state.posts.map((post, index) => {
          return (
            <div key={index} className='post' style = {{'text-align': 'center'}}>
                <h3 className='post-username'>Rashul Rajbhandari</h3>
                <img
                  src = {post.pictureDownloadUrl}
                  className='post-image'
                  alt = 'image'
                 />
                 <br />
                 <br />
                  <LoveCount post = {post}/>
                  <div>tag: {post.tag} </div>
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

    )
  }
}

export default TopNavBar;
