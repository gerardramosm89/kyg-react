import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, deleteBlog } from '../actions/index';
import { Link } from 'react-router';
class PostsIndex extends Component {
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		return this.props.posts.map(post => {
				return(
			<div key={post.title} to={"/post/" + post.title}>
				<li className="list-group-item" key={post.title}>
					<strong>{post.title}</strong><br />
					<span>posted by: {post.author}</span>
					<div class="btn btn-danger">Delete</div>
				</li>
			</div>
				)
			});

	}
	deleteBlogx(title){
		this.props.deleteBlog(title);
	}
	renderPosts2(){
		return this.props.posts.map(post => {
			return (
				<div key={post.title} className="blogindexlist">
					<div className="title">
						<Link to={"/post/" + post.title}>
						<h1 key={post.title}>{post.title}</h1>
						<h4>Author: {post.author}</h4>
						</Link>
					</div>
					<div className="btnsdiv">
						<button className="btn btn-danger postbtns"
						onClick={() => this.deleteBlogx(post.title)}>Delete</button>
						<Link to={"/posts/edit/" + post.title} className="btn btn-info postbtns">Edit</Link>
					</div>
				</div>
			)
		});
	}
	render() {
		return (
			<div>
					<div className="blogheader text-center">
          	<h1>Blogs Index</h1>
					</div>
					<div className="container">
							{/*}
						<ul className="list-group poststable">
						 {this.renderPosts()}
						 </ul>
						 */}
						 <div className="bloglist">
						 {this.renderPosts2()}
						 </div>
				 	</div>
        	<div className="container text-xs-right">
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
export default connect(mapStateToProps, { fetchPosts, deleteBlog })(PostsIndex);
