import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class BlogShow extends Component {
	componentWillMount(){
		this.props.fetchPost(this.props.params.title);
	}
	injectHTML() {
  	return {__html: this.props.post.content};
	}
	render() {
		let post = this.props.post;
		if (!post){
			return <div>loading</div>
		}
		return (
				<div className="container">
					<div className="jumbotron text-center">
						<h1>{post.title}</h1>
					</div>
					<div dangerouslySetInnerHTML={this.injectHTML()} />  {/* Have to put this in so we can put in HTML in our content */}
				</div>
				);
	}
}
function mapStateToProps(state) {
	return {post: state.posts.post };
}
export default connect(mapStateToProps, { fetchPost })(BlogShow);
