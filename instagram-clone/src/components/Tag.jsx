import React, { Component } from 'react';
import {Link} from 'react-router';

import ClapCount from './ClapCount';
import Comments from './Comments';

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
        console.log('post in tag.jsx', post.val());
        const serverKey = post.key;
        let {caption, pictureDownloadUrl, totalClaps, tag, username, comments} = post.val();
        if(tag === '#' + this.props.params.tag){
          posts.push({caption, pictureDownloadUrl, serverKey, totalClaps, tag, username, comments});
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

    return(
      <div className='container'>
        <div><Link className='backhome-link' to='/app'><u> Back Home </u></Link></div>
        <div className='no-posts'>
          <h3>{this.state.noPosts}</h3>
        </div>

        {
          this.state.posts.map((post, index) => {
          console.log('post', post);
          return (
            <div key={index} className='post'>
              <div className='display-picture-div'>
                <img src={post.displayPicture} className='display-picture'/>
                <p className='post-username'><strong> {post.username} </strong></p>
              </div>

              <div>
                <img
                  src = {post.pictureDownloadUrl}
                  className='post-image'
                  alt = 'image'
                 />
                 <br />
                 <br />
                  <ClapCount post = {post}/>
                  <div>tag: {post.tag} </div>
                  <div className='caption'>
                    <p className='post-caption'>
                      <strong> {post.username}</strong> {post.caption}
                    </p>
                   </div>

                  <hr />
                  <Comments post = {post}/>

                </div>
              </div>
          )
        })}

      </div>

    )
  }
}


export default TopNavBar;
