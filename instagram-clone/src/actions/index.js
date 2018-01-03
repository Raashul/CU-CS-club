import { SIGNED_IN } from '../constants';

export function logUser(uid, username){
  const action = {
    type: SIGNED_IN,
    uid

  }
  return action;
}

// export function setPost(){
//   const action = {
//     type: 'SET_POST',
//
//   }
//}
