import React, { Component } from 'react';


class FeaturedTags extends Component{

  render(){
    return(
      <div className='featured-tags'>
         <button className='featured-buttons'>#funny</button>
         <button className='featured-buttons'>#college</button>
         <button className='featured-buttons'>#nature</button>
         <button className='featured-buttons'>#technology</button>
         <button className='featured-buttons'>#news</button>
      </div>
    )
  }

}


export default FeaturedTags;
