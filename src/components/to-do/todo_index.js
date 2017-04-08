import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class TodoIndex extends Component {
	render() {
		return (
				<div>
          <h1>The ever so classic, To-Do List</h1>
				</div>
				);
	}
}
function mapStateToProps(state) {
	return {notes: {notes: "notes"} };
}
export default connect(mapStateToProps, {null})(TodoIndex);
