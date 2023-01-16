import React, { Component } from 'react';

class Demo extends Component {
	constructor(props) {
		//! To gain access to props inside the constructor you MUST CALL super(props)
		super(props); //? Passing props is standard, but not necessary. 
		console.log(this.props.animal); // this would be undefined without super(props)

		this.state = {
			color: 'cyan',
		};
	}
	render() {
		return (
			<div>
				<h1> Animal: {this.props.animal} </h1>
				<h2> Favorite Food: {this.props.food} </h2>
				<p> Color: {this.state.color} </p>
			</div>
		);
	}
}

export default Demo;
