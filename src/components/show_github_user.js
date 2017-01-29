import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
class ViewGithubUser extends Component {
		onSubmit(props) {
			console.log(props);
		}
		render(){
		const handleSubmit = this.props.handleSubmit;
		const githubuser = this.props.fields.githubuser;
		console.log(this.props.fields);
		return(
				<div>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
						<label>Github User</label>
						<input type="text" className="form-control" { ...githubuser } />
						</div>
						<button type="submit" className="btn btn-primary">
							Search Github!
						</button>
					</form>
				</div>
		);
	}
}

export default reduxForm({
	form: 'GithubForm',
	fields:['githubuser']
},null,null )(ViewGithubUser);
