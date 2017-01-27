import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createReviewPost } from '../actions/index';
class NewReview extends Component {
	render(){
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
				<Link to="/" className="text-xs-left btn btn-info">
				Home
				</Link>
				<div className="container">
					<div className="jumbotron text-center">
					<h2>Start here to create a new review post.</h2>
					</div>
					<form onSubmit={handleSubmit(this.props.createReviewPost)}>
						<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-control" { ...title } />
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
				</div>{/* end container*/}
			</div>
		);
	}
}

export default reduxForm({
	form: 'NewReviewForm',
	fields: ['title','keywords','date','title_image','content','author']
},null, { createReviewPost })(NewReview);
