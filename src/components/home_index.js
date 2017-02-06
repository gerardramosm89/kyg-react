import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeIndex extends Component {
	render(){
		return(
			<div>
			<div className="homebanner">
				<div className="headerbottom text-center">
					<h1>Hi, my name is Gerard Ramos</h1>
					<h3>Full Stack Developer</h3>
				</div>
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
