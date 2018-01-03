import React, { Component } from 'react';


class UserHeader extends Component{


  render(){


    return(

      <div>
        <h2> Hi {this.props.username} ! </h2>
      </div>

    )
  }

}

export default UserHeader;
