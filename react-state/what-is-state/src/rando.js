import React, { Component } from 'react';

class Rando extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
		};
		this.makeTimer();
	}

	//* Function that creates a random number every second based on the maxNum passed from props
	makeTimer() {
		setInterval(() => {
			//? Create the number
			let rand = Math.floor(Math.random() * this.props.maxNum);
			//? Set the new state of num to the number
			this.setState({ num: rand });
			//? have state re-render every second (1000 milliseconds)
		}, 1000);
	}
	render() {
		console.log('I AM THE SPIRIT OF CHANGE!!!');
		return <h1>{this.state.num}</h1>;
	}
}

export default Rando;
