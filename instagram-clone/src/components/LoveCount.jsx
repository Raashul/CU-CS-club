import React, { Component } from 'react';
import { Link } from 'react-router'

import { posts } from '../firebase';

class LoveCount extends Component{

  constructor(props){
    super(props);
    this.state = {
      totalLoves: this.props.post.totalLoves,
      loveButtonDisabled: false,
      countClicked: 0
    }
    console.log('this.state', this.state);

  }

  increaseLoveCount(){

    this.setState({countClicked: this.state.countClicked + 1});

  

    if(this.state.countClicked > 9){
      this.setState({loveButtonDisabled : true})
    }
    else{
      this.setState({
        totalLoves: this.state.totalLoves + 1
      });


      let postData = {
        totalLoves: this.state.totalLoves
      }


      const newPostKey = this.props.post.serverKey;

      let updates = {};
      updates['/posts'] = postData;

      return posts.child(newPostKey).update(postData);

    }


  }

  componentDidMount(){

  }

  render(){

    return(
      <div className='love-count-div'>
        <Link disabled = {this.state.loveButtonDisabled} className='love-count' onClick={() => this.increaseLoveCount()}>
          <i className="fa fa-heart fa-2x" aria-hidden="true">
         </i>
        <em><span> {this.state.totalLoves} </span></em>
       </Link>

      </div>
    )
  }

}

export default LoveCount;
