import React, { Component } from 'react';
import { Link } from 'react-router'

class LoveCount extends Component{

  constructor(props){
    super(props);
    this.state = {
      totalLoves: this.props.totalLoves
    }
  }

  increaseLoveCount(){
    this.setState({
      totalLoves: this.state.totalLoves + 1
    });
  }

  render(){

    return(
      <div className='love-count-div'>
        <Link className='love-count' onClick={() => this.increaseLoveCount()}>
          <i className="fa fa-heart fa-2x" aria-hidden="true">
         </i>
        <em><span> {this.state.totalLoves} </span></em>
       </Link>

      </div>
    )
  }

}

export default LoveCount;
