import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount(){
		console.log("Now would be a good time to call an action creator");	
		this.props.fetchPosts();
	}
	render() {
	return (
        <div className="jumbotron text-center">
          <h1>KnowYourGlass Testing Grounds</h1>
        </div>
	)
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}
export default connect(null,mapDispatchToProps)(PostsIndex);
