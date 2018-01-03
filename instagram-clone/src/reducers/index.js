import { SIGNED_IN } from '../constants';
import { bake_cookie, sf_cookie } from 'sfcookies';


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
      bake_cookie('user', user);
      return user;
    default:
      return state;
  }
}
