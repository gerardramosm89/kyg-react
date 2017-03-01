import { FETCH_POSTS } from '../actions/index';
import { FETCH_POST } from '../actions/index';
import { FETCH_REVIEWS } from '../actions/index';
import { FETCH_REVIEW } from '../actions/index';

const INITIAL_STATE = { reviewPost: null, reviewPosts: [], all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type){
		case FETCH_POSTS:
			return {...state, all:action.payload.data}
		case FETCH_POST:
			return {...state, post:action.payload.data}
		case FETCH_REVIEWS:
			return {...state, reviewPosts:action.payload.data.data}
		case FETCH_REVIEW:
			console.log(`Reducer payload.data is: ${JSON.stringify(action.payload.data.data)}`);
			return {...state, reviewPost:action.payload.data.data}
		default:
			return state;
	}
}
