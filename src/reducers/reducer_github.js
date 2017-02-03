import { FETCH_GITHUBUSER } from '../actions/index';
import { CLEAR_GITHUBUSER } from '../actions/index';
const INITIAL_STATE = { repos: null};

export default function(state = INITIAL_STATE, action) {
	//console.log("Action that was received was: ", action)
  switch(action.type){
    case FETCH_GITHUBUSER:
      return {...state, repos:action.payload.data}
    case CLEAR_GITHUBUSER:
	  return {...state, repos:action.payload.data}
    default:
      return state;
  }
}
