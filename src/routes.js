import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import NewReview from './components/new_review';
import ViewGithubUser from './components/show_github_user';
import HomeIndex from './components/home_index';
import BlogShow from './components/blog_show';

export default (
	<Route path="/" component={App}>
	<IndexRoute component={HomeIndex} />
	<Route path="post/:title" component={BlogShow} />
	<Route path="posts" component={PostsIndex} />
	<Route path="posts/new" component={PostsNew} />
	<Route path="posts/newreview" component={NewReview} />
	<Route path="github" component={ViewGithubUser} />
	</Route>
)
