import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import GithubReducer from './reducer_github';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_authentication';

const rootReducer = combineReducers({
	posts: PostsReducer,
	github: GithubReducer,
	form: formReducer,
	auth: authReducer

});

export default rootReducer;
