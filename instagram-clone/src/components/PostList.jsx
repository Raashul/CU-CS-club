import React, { Component } from 'react';

import { posts } from '../firebase';

import FeaturedTags from './FeaturedTags';
import LoveCount from './LoveCount';

class PostList extends Component{

  constructor(props){
    super(props);
    this.state = {
      posts: [],
      tagCounts : {
        funnyPosts: 0,
        collegePosts: 0,
        naturePosts: 0,
        technologyPosts: 0,
        newsPosts: 0,
        savagePosts: 0,
        sciencePosts: 0,
        awkwardMomentPosts: 0,
        newsPosts: 0,
        wtfPosts: 0
      }

    };
  }


  componentWillMount(){
    let tagCounts = {
      funnyPosts: 0,
      collegePosts: 0,
      naturePosts: 0,
      technologyPosts: 0,
      newsPosts: 0,
      savagePosts: 0,
      sciencePosts: 0,
      awkwardMomentPosts: 0,
      wtfPosts: 0
    }
    posts.on('value', snap => {
      let posts = [];
      snap.forEach(post => {
        const serverKey = post.key;
        let {caption, pictureDownloadUrl, totalLoves, tag, username, displayPicture} = post.val();
        posts.push({caption, pictureDownloadUrl, serverKey, totalLoves, tag, username, displayPicture});

        if(tag === '#funny'){
          tagCounts.funnyPosts++;
        }
        else if(tag === '#college'){
            tagCounts.collegePosts++;
        }
        else if(tag === '#nature'){
            tagCounts.naturePosts++;
        }
        else if(tag === '#technology'){
            tagCounts.technologyPosts++;
        }
        else if(tag === '#savage'){
            tagCounts.savagePosts++;
        }
        else if(tag === '#science'){
            tagCounts.sciencePosts++;
        }
        else if(tag === '#news'){
            tagCounts.newsPosts++;
        }
        else if(tag === '#awkwardMoments'){
            tagCounts.awkwardMomentPosts++;
        }
        else if(tag === '#wtf'){
            tagCounts.wtfPosts++;
        }
      });
      this.setState({
        posts: posts,
        tagCounts: tagCounts
      })

    })
  }


  render(){
    return(
      <div>
        <FeaturedTags tagCounts = {this.state.tagCounts}/>
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
                    <LoveCount post = {post}/>
                    <div>tag: {post.tag} </div>
                    <div className='caption'>
                      <p className='post-caption'>
                        <strong> {post.username}</strong> {post.caption}
                      </p>
                     </div>

                    <hr />
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default PostList;
