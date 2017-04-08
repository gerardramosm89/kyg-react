import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
	authButton(){
		return(
			<button className="btn btn-primary signinbtn">Sign In</button>
		);
	}
	renderLinks () {
		if (this.props.authenticated) {
			return (
			<li>
				<Link to="/signout">Sign Out</Link>
			</li>
			);
		} else {
			return (
				[
					<li key={1}>
						<Link to="signin">Sign In</Link>
					</li>,
					<li key={2}>
						<Link to="signup">Sign Up</Link>
					</li>
				]
			);
		}
	}
	render() {
    return (
			<div>
					<div className="navbar navbar-default">
						<Link to="" className="navbar-brand">Home</Link>
						<ul className="nav navbar-nav">
							<li><Link to="todoindex">To-Do</Link></li>							
							<li><Link to="posts">Blogs</Link></li>
							<li><Link to="reviews">Reviews</Link></li>
							<li><Link to="github">Github Searcher</Link></li>
							{this.renderLinks()}
							{/*<li><Link to="signin">Sign In</Link></li>*/}
						</ul>
					</div>
				{this.props.children}
			</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(App);