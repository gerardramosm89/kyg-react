import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
class PostsNew extends Component {
	render(){
		return(
			<div>
				<Link to="/" className="text-xs-left btn btn-info">
				Home
				</Link>
				<div className="container">
					<div className="jumbotron text-center">
					<h2>Start here to create a post.</h2>
					</div>
					<form>
						<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-control" />
						</div>
            <div className="form-group">
            <label>Keywords</label>
            <input type="text" className="form-control" />
            </div>
            <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-control" />
            </div>
            <div className="form-group">
            <label>Title Image</label>
            <input type="text" className="form-control" />
            </div>
            <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" />
            </div>
            <div className="form-group">
            <label>Author</label>
            <input type="text" className="form-control" />
            </div>
					</form>
				</div>{/* end container*/}
			</div>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title','keywords','date','title_image','content','author']
})(PostsNew);
