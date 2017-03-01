import { CHANGE_AUTH } from '../actions/types';

const INITIAL_STATE = { isLoggedIn: false};

export default function(state = INITIAL_STATE, action) {
	//console.log("Action that was received was: ", action)
  switch(action.type){
    case CHANGE_AUTH:
      return {...state, isLoggedIn:action.payload.data}
    default:
      return state;
  }
}
