import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
class PostsIndex extends Component {
	componentWillMount(){
		console.log("Now would be a good time to call an action creator");	
		this.props.fetchPosts();
	}


	render() {
		return (
			<div>
        <div className="jumbotron text-center">
          <h1>Testing Grounds</h1>
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
	return { posts: state.posts.all };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
