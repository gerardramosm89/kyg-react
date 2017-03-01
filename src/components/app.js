import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	authButton(){
		return(
			<button className="btn btn-primary signinbtn">Sign In</button>
		);
	}

	render() {
    return (
			<div>
					<div className="navbar navbar-default">
						<Link to="" className="navbar-brand">Home</Link>
						<ul className="nav navbar-nav">
							<li><Link to="posts">Blogs</Link></li>
							<li><Link to="reviews">Reviews</Link></li>
							<li><Link to="github">Github Searcher</Link></li>
							<li><Link to="test">Test</Link></li>
							<li>{ this.authButton() }</li>
						</ul>
					</div>
				{this.props.children}
			</div>
    );
  }
}
