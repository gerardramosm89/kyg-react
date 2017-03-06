import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { fetchReview, updateReviewPost } from '../actions/index';

class EditReview extends Component {
	
	static contextTypes = {
		router: PropTypes.object
	}
	componentWillMount(){
		this.props.fetchReview(this.props.params.title);
	}
	onSubmit(props) {
		this.props.updateReviewPost(props.title, props);
		console.log("submission data is: " + JSON.stringify(props.title));
	}
	render(){
		let review = this.props.review;
		if (!review){
			return <div>loading</div>
		}
		console.log(`review from this.props.review is ${JSON.stringify(review)}`);
		//console.log("this.props.posts is: " + JSON.stringify(this.props.posts));
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
				<div className="container">
					<div className="jumbotron text-center">
					<h2>Edit Review</h2>
					</div>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" { ...title } defaultValue={review[0].title} />
          </div>
          <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" { ...author } defaultValue={review[0].author} />
          </div>
          <div className="form-group">
          <label>brand</label>
          <input type="text" className="form-control" { ...brand } defaultValue={review[0].brand} />
          </div>
          <div className="form-group">
          <label>Title Image</label>
          <input type="text" className="form-control" { ...title_image } defaultValue={review[0].title_image} />
          </div>
          <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" { ...content } defaultValue={review[0].content} />
          </div>
          <div className="form-group">
          <label>Edit Date</label>
          <input type="text" className="form-control" { ...edit_date } defaultValue={review[0].edit_date} />
          </div>
          <div className="form-group">
          <label>Post Date</label>
          <input type="text" className="form-control" { ...post_date } defaultValue={review[0].post_date} />
          </div>
          <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" { ...category } defaultValue={review[0].category} />
          </div>
          <div className="form-group">
          <label>Sensor</label>
          <input type="text" className="form-control" { ...sensor } defaultValue={review[0].sensor} />
          </div>
          <div className="form-group">
          <label>Rating</label>
          <input type="text" className="form-control" { ...rating } defaultValue={review[0].rating} />
          </div>

						<button type="submit" className="btn btn-primary">Post!</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { review: state.posts.reviewPost }
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
	fields: ['title','sensor','edit_date','category','post_date','title_image','content','brand','author','rating']
}, mapStateToProps, { fetchReview, updateReviewPost })(EditReview);
