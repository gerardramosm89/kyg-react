import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	divStyle = {
		'text-align':'center'
	};
	render() {
    return (
			<div className="sitebackground">
					<div className="container navbar navbar-default">
						<Link to="/" className="navbar-brand">Home</Link>
						<ul className="nav navbar-nav">
							<li><Link to="posts">Posts</Link></li>
							<li><Link to="github">Github Searcher</Link></li>
						</ul>
					</div>
				{this.props.children}
			</div>
    );
  }
}
