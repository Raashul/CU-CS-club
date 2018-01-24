import React, { Component } from 'react';
import { Link } from 'react-router'

import { posts } from '../firebase';

class ClapCount extends Component{

  constructor(props){
    super(props);
    this.state = {
      totalClaps: this.props.post.totalClaps,
      clapButtonDisabled: (localStorage.getItem('username') === this.props.post.username ? true : false),
      countClicked: 0,
      clapError: '',

    }
    console.log('this.state.clapButtonDisabled', this.state.clapButtonDisabled);
  }

  increaseLoveCount(){

    if(this.state.clapButtonDisabled === true){
      this.setState({clapError:'You can\'t like your own post' });
      return;
    }

    this.setState({countClicked: this.state.countClicked + 1});

    this.setState({
      totalClaps: 1 + this.state.totalClaps
    });

    let postData = {
      totalClaps: this.state.totalClaps
    }

    const newPostKey = this.props.post.serverKey;
    let updates = {};
    updates['/posts'] = postData;

    return posts.child(newPostKey).update(postData);


  }



  render(){

    return(
      <div className='love-count-div'>
        <Link
           className='love-count' onClick={() => this.increaseLoveCount()}>
          <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
       </Link>

       <p style={{color: 'red'}}>{this.state.clapError}</p>

       <em><span className='nolike'> <strong> {this.state.totalClaps} claps </strong></span></em>
       <br />


      </div>
    )
  }

}

export default ClapCount;
