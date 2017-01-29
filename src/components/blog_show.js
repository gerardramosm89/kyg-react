import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class BlogShow extends Component {
	componentWillMount(){
		this.props.fetchPost(this.props.params.title);
	}
	render() {
		let post = this.props.post;
		if (!post){
			return <div>loading</div>
		}
		return (
				<div>
					<Link to="/posts" className="btn btn-info">Back to posts</Link>
					<div className="jumbotron text-center">
						<h2>{post.title}</h2>
					</div>
					<p>{post.content}</p>
				</div>
				);
	}
}
function mapStateToProps(state) {
	return {post: state.posts.post };
}
export default connect(mapStateToProps, { fetchPost })(BlogShow);
