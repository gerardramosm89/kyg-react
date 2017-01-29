import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class BlogShow extends Component {
	componentWillMount(){
		this.props.fetchPost(this.props.params.title);
	}
	render() {
		return (
				<div>
					<Link to="/posts" className="btn btn-info">Back to posts</Link>
					<div>Show post {this.props.params.title}</div>
				</div>
				);
	}
}

export default connect(null, { fetchPost })(BlogShow);
