import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
class PostsIndex extends Component {
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		return this.props.posts.map(post => {
				return(
			<Link key={post.title} to={"posts/" + post.title}>
				<li className="list-group-item" key={post.title}>
					<span className="pull-xs-right">{post.author}</span>
					<strong>{post.title}</strong>
				</li>
			</Link>
				)
			});
		
	}
	render() {
		return (
			<div>
        <div className="jumbotron text-center">
          <h1>Posts Component</h1>
				</div>
				<div className="col-xs-8 col-xs-offset-2">
				<ul className="list-group">
				 {this.renderPosts()}
				
				</ul>
				</div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add blog post</Link>
					<Link to="/posts/newreview" className="btn btn-primary">Add review post</Link>
					</div>
			</div>
	)
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all }
}
/*
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}
*/
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
