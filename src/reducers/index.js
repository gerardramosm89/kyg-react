import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import GithubReducer from './reducer_github';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	posts: PostsReducer,
	github: GithubReducer,
	form: formReducer
});

export default rootReducer;
