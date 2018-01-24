import { combineReducers } from 'redux';
import user from './reducer_user';
import posts from './reducer_post';


export default combineReducers({
  user,
  posts
});
