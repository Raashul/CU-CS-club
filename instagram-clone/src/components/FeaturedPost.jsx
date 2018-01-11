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
          let {caption, pictureDownloadUrl, totalLoves} = post.val();
          if(totalLoves > max){

            max = totalLoves;
            featuredPost = {
              caption,
              pictureDownloadUrl,
              serverKey,
              totalLoves
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
            By Rashul Rajbhandari
          </p>

          <p className="main-love-para">
            <strong> {this.state.featuredPost.caption}</strong>
          </p>
           <hr />
        </div>
      )

  }

}

export default FeaturedPost;
