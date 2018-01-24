import React, { Component } from 'react';
import { posts } from '../firebase';

class FeaturedPost extends Component{

  constructor(props){
    super(props);
    this.state = {
      featuredPost: {
        caption: '',
        pictureDownloadUrl: '',
        serverKey : '',
        totalClaps: 0
      }
    };
  }

  componentWillMount(){
    posts.on('value', snap => {
      let featuredPost = {};
      let max = 0;
      snap.forEach(post => {
        const serverKey = post.key;
        let {caption, pictureDownloadUrl, totalClaps, username} = post.val();
        if(totalClaps > max){

          max = totalClaps;
          featuredPost = {
            caption,
            pictureDownloadUrl,
            serverKey,
            totalClaps,
            username
            };
          this.setState({featuredPost: featuredPost});
        }

      });

    })
  }

  render(){

    return (
      <div>
        <h3><strong> Featured post </strong></h3>

        <p>
          <strong>{this.state.featuredPost.username} </strong>{this.state.featuredPost.caption}
        </p>

         <hr />
         <img
           src = {this.state.featuredPost.pictureDownloadUrl}
           className='featured-image'
           alt = 'Smiley face'
          />
      </div>
    )

}

}

export default FeaturedPost;
