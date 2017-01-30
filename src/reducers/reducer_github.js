import { FETCH_GITHUBUSER } from '../actions/index';
const INITIAL_STATE = { repos: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_GITHUBUSER:
      return {...state, repos:action.payload.data}
    default:
      return state;
  }
}
