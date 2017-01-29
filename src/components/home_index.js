import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeIndex extends Component {
	render(){
		return(
			<div>
			<div className="jumbotron text-center">
			<h1>This is going to be the home component</h1>
			</div>
			<Link to="/posts" className="btn btn-primary">Go to Blog Posts</Link>
			</div>
		)
	}
}
