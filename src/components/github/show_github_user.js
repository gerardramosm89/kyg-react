import React, { Component } from 'react';
import GithubUserHTML from './github_user_html';

export default class ViewGithubUser extends Component {
	render(){
		return(
				<div>
				<div>Here is where the Github user will show </div>
				<GithubUserHTML />
				</div>
		)
	}
}
