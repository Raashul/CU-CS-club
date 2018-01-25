import React, { Component } from 'react';
import { posts } from '../firebase';


class Comments extends Component{

  constructor(props){
    super(props);
    this.state = {
      commentText : '',
      comments: {
        username : '',
        comment : ''
      }
    }

  }

  commentSubmit(){

    let comments = this.props.post.comments;

    comments.push({
      comment: this.state.commentText,
      username: localStorage.getItem('username')
    })

    let postData = {
      comments: comments
    }

    const newPostKey = this.props.post.serverKey;

    let updates = {};
    updates['/posts'] = postData;

    this.refs.commentInput.value = '';

    return posts.child(newPostKey).update(postData);

  }

  render(){

    return(
      <div>
      {
        this.props.post.comments.map((comment, index) => {
          return (
            <div className="comment-section" key={index}>
              <p><span className='comment-username'> <strong>{comment.username} </strong> </span>
              <span className='comment-comment'> {comment.comment} </span>
            </p>

            </div>

          )
        })
      }
      <hr />
     <div className="yourcomment">
       <textarea
         className="commenthere"
         type="text"
          placeholder="Add a comment..."
          ref='commentInput'
          onChange = {event => this.setState({
            commentText: event.target.value
          })}
          onKeyPress = {event => {
            if(event.key === 'Enter'){
              this.commentSubmit();
            }
          }}
        />

       </div>
    </div>
    )
  }
}

export default Comments;
