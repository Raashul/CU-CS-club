import { SIGNED_IN, ADD_POST} from '../constants';

export function logUser(uid, username){
  const action = {
    type: SIGNED_IN,
    uid
  }
  return action;
}

export function setPosts(posts){
  const action = {
    type: ADD_POST,
    posts
  }
  return action;
}



// export function setPost(){
//   const action = {
//     type: 'SET_POST',
//
//   }
//}
