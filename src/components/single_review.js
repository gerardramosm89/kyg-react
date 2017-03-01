import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchReview } from '../actions/index';


class SingleReview extends Component {
	componentWillMount(){
		this.props.fetchReview(this.props.params.title);
	}

	injectHTML() {
  	return {__html: this.props.reviewPost[0].content};
	}
	render() {
		let post = this.props.reviewPost;
    console.log("post is: " + JSON.stringify(post));
		if (!post){
			return <div>loading</div>
		}
		return (
				<div>
					<div className="text-center blogheader">
						<h1 className="">{post[0].title}</h1>
					</div>
					<div dangerouslySetInnerHTML={this.injectHTML()} />  {/* Have to put this in so we can put in HTML in our content */}
				</div>
				);
	}
}
function mapStateToProps(state) {
	return { reviewPost: state.posts.reviewPost };
}
export default connect(mapStateToProps, { fetchReview })(SingleReview);
