import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import NewReview from './components/new_review';
import ViewGithubUser from './components/show_github_user';
import HomeIndex from './components/home_index';
import BlogShow from './components/blog_show';
import EditReview from './components/edit_review';
import ReviewsIndex from './components/reviews_index';
import EditBlog from './components/edit_blog';
import SingleReview from './components/single_review';
import test1 from './components/playgrounds/test1';
import Signin from './components/auth/signin';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeIndex} />
		<Route path="test" name="Gerry" component={test1} />
		<Route path="signin" component={Signin} />
		<Route path="post/:title" component={BlogShow} />
		<Route path="review/:title" component={SingleReview} />
		<Route path="posts" component={PostsIndex} />
		<Route path="reviews" component={ReviewsIndex} />
		<Route path="reviews/edit/:title" component={EditReview} />
		<Route path="posts/edit/:title" component={EditBlog} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/newreview" component={NewReview} />
		<Route path="github" component={ViewGithubUser} />
	</Route>
)
