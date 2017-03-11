import { AUTH_USER, UNAUTH_USER } from '../actions/types';
const INITIAL_STATE = { isLoggedIn: false};

export default function(state = INITIAL_STATE, action) {
	//console.log("Action that was received was: ", action)
  switch(action.type){
    case AUTH_USER:
      return {...state, authenticated: true}
    case UNAUTH_USER:
      return {...state, authenticated: false}
    default:
      return state;
  }
}
