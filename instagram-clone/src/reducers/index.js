import { SIGNED_IN } from '../constants';

let user = {
  uid: user
}

export default (state = user, action) => {
  switch(action.type){
    case SIGNED_IN:
      const {uid} = action;
      user = {
        uid
      }
      return user;
    default:
      return state;
  }
}
