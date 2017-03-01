import React, { Component } from 'react';

export default class test1 extends Component {
	render(){
    var name = this.props.route.name;
    console.log("props is: ", this.props.route.name);
    console.log("name is: ", name);
		return (
				<div>
          <h1>Hello {name}</h1>
          <p>This is from the component</p>
				</div>
		)
	}
}