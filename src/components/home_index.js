import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeIndex extends Component {
	render(){
		return(
			<div>
			<div className="homebanner">
				<div className="headerbottom text-center">
					<h1>Hi, my name is Gerard Ramos :)</h1>
					<h3>FSD</h3>
				</div>
			</div>
				<div className="container" id="aboutmecontainer">
					<div className="aboutmeleft">

						<p className="aboutme">About me:</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>


					</div>
					<img className="aboutmeright aboutmeimage" src="https://idealistinvestment.com/images/stacy-22.jpg" />
				</div>
			</div>
		)
	}
}
