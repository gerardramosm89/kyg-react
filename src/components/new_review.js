import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createReviewPost } from '../actions/index';
class NewReview extends Component {
	render(){
		const handleSubmit = this.props.handleSubmit;
		const title = this.props.fields.title;
		const brand = this.props.fields.brand;
		const keywords = this.props.fields.keywords;
		const post_date = this.props.fields.post_date;
		const title_image = this.props.fields.title_image;
		const content = this.props.fields.content;
		const author = this.props.fields.author;
    const category= this.props.fields.category;
    const sensor = this.props.fields.sensor;
    const edit_date = this.props.fields.edit_date;
		const rating = this.props.fields.rating;
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
            <label>Author</label>
            <input type="text" className="form-control" { ...author }/>
            </div>
            <div className="form-group">
            <label>brand</label>
            <input type="text" className="form-control" { ...brand }/>
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
            <label>Edit Date</label>
            <input type="text" className="form-control" { ...edit_date }/>
            </div>
            <div className="form-group">
            <label>Post Date</label>
            <input type="text" className="form-control" { ...post_date }/>
            </div>
            <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" { ...category }/>
            </div>
            <div className="form-group">
            <label>Sensor</label>
            <input type="text" className="form-control" { ...sensor }/>
            </div>
            <div className="form-group">
            <label>Rating</label>
            <input type="text" className="form-control" { ...rating }/>
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
	fields: ['title','sensor','edit_date','category','post_date','title_image','content','brand','author','rating']
},null, { createReviewPost })(NewReview);
