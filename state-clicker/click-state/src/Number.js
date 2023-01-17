import React, { Component } from 'react';

class Number extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
		};
		this.rando = this.rando.bind(this);
	}

	//? Generates a Random Number
	rando() {
		let random = Math.floor(Math.random() * 10) + 1;
		this.setState({ num: random });
	}

	render() {
		return (
			<div>
				<h1>Number is: {this.state.num} </h1>
				{this.state.num === 7 ? (
					<h2> WE'RE SO PROUD OF YOU! </h2>
				) : (
					<button type='Submit' onClick={this.rando}>
						RANDOMIZE!
					</button>
				)}
			</div>
		);
	}
}

export default Number;

//TODO Render a random number in the header
//TODO Have that random number change when we click randomize
