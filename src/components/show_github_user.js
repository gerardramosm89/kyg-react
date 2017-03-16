import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { fetchGithubRepos, clearGithubRepos } from '../actions/index';
class ViewGithubUser extends Component {
		componentWillMount(){
			this.props.clearGithubRepos();
		}
		
		onSubmit(props) {
			this.props.fetchGithubRepos(props.githubuser);
		}

		renderRepos(){
			//repos starts as null, we need to return early to not break our map
			//function
			if (!this.props.repos) {
				return <div></div>
			}
			return this.props.repos.map(repo => {
				return(
					<li className="list-group-item" key={repo.name}>
						<a href={'https://github.com/gerardramosm89/' + repo.name}>{repo.name}</a>
					</li>
				)
			});
		}

		renderError(githubuser){
			if (githubuser.error && githubuser.touched) {
				return (
				    <div className="alert alert-danger">
            <strong>{githubuser.touched ? githubuser.error : ''}</strong>
						</div>
				);
			}
		}
		render(){
		const handleSubmit = this.props.handleSubmit;
		const githubuser = this.props.fields.githubuser;
		return(
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
						<label><h1 className="text-center">Github User</h1></label>
						<input type="text" className="form-control" { ...githubuser } />
						{this.renderError(githubuser)}
						</div>
						<button type="submit" className="btn btn-primary">
							Search Github!
						</button>
					</form>
					<ul className="list-group">
					{this.renderRepos()}
					</ul>
				</div>
		);
	}
}
function validate(values) {
	const errors = {};
	if (!values.githubuser){
		errors.githubuser = 'Enter a Github User please';
	}
	return errors;
}

function mapStateToProps(state) {
	return { repos: state.github.repos,
	posts: state.posts.all }
}
export default reduxForm({
	form: 'GithubForm',
	fields:['githubuser'],
	validate
},mapStateToProps, { fetchGithubRepos, clearGithubRepos })(ViewGithubUser);
