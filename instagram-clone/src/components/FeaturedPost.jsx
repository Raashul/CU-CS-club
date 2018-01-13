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
          let {caption, pictureDownloadUrl, totalLoves, username} = post.val();
          if(totalLoves > max){

            max = totalLoves;
            featuredPost = {
              caption,
              pictureDownloadUrl,
              serverKey,
              totalLoves,
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

          <p className="secondary-love-para">
            {this.state.featuredPost.username}
          </p>

          <p className="main-love-para">
            <strong> {this.state.featuredPost.caption}</strong>
          </p>
           <hr />
           <img
             src = {this.state.featuredPost.pictureDownloadUrl}
             className='featured-image'
             alt = 'image'
            />
        </div>
      )

  }

}

export default FeaturedPost;
