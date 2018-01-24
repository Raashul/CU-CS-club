import {ADD_POST} from '../constants';

export default (state= [], action) => {
  switch(action.type){
    case ADD_POST:
      const {posts} = action;
      return posts;
    default:
      return state;
  }
}
