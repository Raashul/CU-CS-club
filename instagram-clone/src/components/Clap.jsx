import React, { Component } from 'react';
import { Link } from 'react-router'

import { posts } from '../firebase';

class Clap extends Component{

  constructor(props){
    super(props);
    this.state = {
      // totalLoves: this.props.post.totalLoves,
      // loveButtonDisabled: false,
      // countClicked: 0
      clap : this.props.post.clap
    }
  }

  // increaseLoveCount(){
  //
  //   this.setState({countClicked: this.state.countClicked + 1});
  //
  //   if(this.state.countClicked > 9){
  //     this.setState({loveButtonDisabled : true})
  //   }
  //   else{
  //
  //     this.setState({
  //       totalLoves: 1 + this.state.totalLoves
  //     });
  //     console.log('total loves after update', this.state.totalLoves);
  //
  //     let postData = {
  //       totalLoves: this.state.totalLoves
  //     }
  //
  //     const newPostKey = this.props.post.serverKey;
  //     let updates = {};
  //     updates['/posts'] = postData;
  //
  //     return posts.child(newPostKey).update(postData);
  //
  //   }
  // }

  handleClap(){
    this.setState({
      clap : !(this.state.clap)
    })
  }

  render(){

    return(
      <div className='love-count-div'>
        <Link disabled = {this.state.clap}
           className='love-count' onClick={() => this.handleClap()}>
          <i className="fa fa-thumbs-up fa-1x" aria-hidden="true"></i>
       </Link>
       <em><span className='nolike'> <strong> {this.state.totalLoves} likes </strong></span></em>
       <br />


      </div>
    )
  }

}

export default Clap;
