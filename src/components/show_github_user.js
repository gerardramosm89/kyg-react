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

			if (!this.props.repos) {
				return <div>Search for a user</div>;
			}
			return this.props.repos.map(repo => {
				return(
					<li className="list-group-item" key={repo.name}>
						{repo.name}
					</li>
				)
			});
		}
		render(){
		const handleSubmit = this.props.handleSubmit;
		const githubuser = this.props.fields.githubuser;
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
					<ul className="list-group">
					{this.renderRepos()}
					</ul>
				</div>
		);
	}
}

function mapStateToProps(state) {
	return { repos: state.github.repos,
	posts: state.posts.all }
}
export default reduxForm({
	form: 'GithubForm',
	fields:['githubuser']
},mapStateToProps, { fetchGithubRepos, clearGithubRepos })(ViewGithubUser);
