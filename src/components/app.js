import React, { Component } from 'react';

export default class App extends Component {
	divStyle = {
		'text-align':'center'
	};
	render() {
    return (
			<div>
			{/*
				<div className="jumbotron text-center">
					<h1>KnowYourGlass Testing Grounds</h1>
				</div>
			*/}
				{this.props.children}
				
			</div>
    );
  }
}
