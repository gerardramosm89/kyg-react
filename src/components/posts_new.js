import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object	
	}

	onSubmit(props) {
		console.log(props);
				this.props.createPost(props)
			.then(() => {
				this.context.router.push('/');
				});
	}
	render(){
		console.log("this.props.posts is: " + JSON.stringify(this.props.posts));
		const handleSubmit = this.props.handleSubmit;
		const title = this.props.fields.title;
		const keywords = this.props.fields.keywords;
		const date = this.props.fields.date;
		const title_image = this.props.fields.title_image;
		const content = this.props.fields.content;
		const author = this.props.fields.author;
		console.log(this.props.fields);
		return(
			<div>
				<div className="container">
					<div className="jumbotron text-center">
					<h2>Start here to create a new blog post.</h2>
					</div>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-control" { ...title } />
						{title.touched ? title.error : ''}
						</div>
            <div className="form-group">
            <label>Keywords</label>
            <input type="text" className="form-control" { ...keywords }/>
            </div>
            <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-control" { ...date }/>
            </div>
            <div className="form-group">
            <label>Title Image</label>
            <input type="text" className="form-control" { ...title_image }/>
            </div>
            <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" { ...content }/>
            </div>
            <div className="form-group">
            <label>Author</label>
            <input type="text" className="form-control" { ...author }/>
            </div>
						
						<button type="submit" className="btn btn-primary">Post!</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all }
}

function validate(values) {
	const errors = {};
	if (!values.title){
		errors.title = 'Enter a title please';
	}
	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title','keywords','date','title_image','content','author'],
	validate
}, mapStateToProps, { createPost })(PostsNew);
