import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router';

class FeaturedTags extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.tagCounts){
      return (<div> </div>);
    }
    return(
      <div className='featured-tags'>
         <Link to = '/tags/funny' className='featured-buttons btn btn-primary'>
          #funny ({this.props.tagCounts.funnyPosts})
        </Link>
         <Link to = '/tags/college' className='featured-buttons btn btn-primary'>
         #college ({this.props.tagCounts.collegePosts})
       </Link>
         <Link to = '/tags/nature' className='featured-buttons btn btn-primary'>
         #nature ({this.props.tagCounts.naturePosts})
       </Link>
         <Link to = '/tags/technology' className='featured-buttons btn btn-primary'>
         #technology ({this.props.tagCounts.technologyPosts})
       </Link>
         <Link to = '/tags/news' className='featured-buttons btn btn-primary'>
         #news ({this.props.tagCounts.newsPosts})
       </Link>
       <Link to = '/tags/science' className='featured-buttons btn btn-primary'>
        #science ({this.props.tagCounts.sciencePosts})
      </Link>
      <Link to = '/tags/awkwardMoment' className='featured-buttons btn btn-primary'>
        #awkwardMoment ({this.props.tagCounts.awkwardMomentPosts})
      </Link>
     <Link to = '/tags/savage' className='featured-buttons btn btn-primary'>
      #savage ({this.props.tagCounts.savagePosts})
    </Link>
    <Link to = '/tags/wtf' className='featured-buttons btn btn-primary'>
     #wtf ({this.props.tagCounts.wtfPosts})
   </Link>
      </div>
    )
  }

}


function mapStateToProps(state){
  const {posts} = state;
  return {
    posts
  }
}


export default connect(mapStateToProps, null) (FeaturedTags);
