import React, { Component } from 'react';


class FeaturedTags extends Component{

  render(){
    return(
      <div className='featured-tags'>
         <button className='featured-buttons'>Funny</button>
         <button className='featured-buttons'>College</button>
         <button className='featured-buttons'>Nature</button>
         <button className='featured-buttons'>Technology</button>
         <button className='featured-buttons'>News</button>
      </div>
    )
  }

}


export default FeaturedTags;
