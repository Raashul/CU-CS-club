import React, { Component } from 'react';
import { Link } from 'react-router'

import { posts } from '../firebase';

class FeaturedPost extends Component{

    constructor(props){
      super(props);
      this.state = {
        featuredPost: {
          caption: '',
          pictureDownloadUrl: '',
          serverKey : '',
          totalLoves: 0
        }
      };

    }

    componentWillMount(){
      posts.on('value', snap => {

        let featuredPost = {};
        let max = 0;
        snap.forEach(post => {

          const serverKey = post.key;
          let {caption, pictureDownloadUrl, totalLoves} = post.val();
          if(totalLoves > max){
            console.log('change max');
            max = totalLoves;
            featuredPost = {
              caption,
              pictureDownloadUrl,
              serverKey,
              totalLoves
              };
            console.log('featuredPost', featuredPost);
            this.setState({featuredPost: featuredPost});
            console.log('this.state in featuredPost', this.state);
          }

        });

      })
    }

    render(){

      return (
        <div > <h1>Featured post</h1>
          <img
            src = {this.state.featuredPost.pictureDownloadUrl}
            className='post-image'
            alt = 'image'
           />
           <hr />

        </div>
      )

  }

}

export default FeaturedPost;
