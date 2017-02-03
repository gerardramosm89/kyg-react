import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeIndex extends Component {
	render(){
		return(
			<div>
				<div className="container jumbotron text-center">
					<h1>Hi.</h1>
				</div>
				
				<div className="container" id="aboutmecontainer">
					<div className="aboutmeleft">
						
						<p className="aboutme">About me:</p>
						Testing the left text
						
					</div>
					<img className="aboutmeright aboutmeimage" src="https://idealistinvestment.com/images/stacy-22.jpg" />
				</div>
			</div>
		)
	}
}
