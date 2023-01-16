import React, { Component } from 'react';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			gameOver: false,
		};
	}
	render() {
		return (
			<div>
				<h1> Your Score is: {this.state.score} </h1>
			</div>
		);
	}
}

export default Game;

//* Alternate Syntax for State
// state = {
//   score: 666,
//   gameOver: false
// }

//? As you can see, there is no constructor.
//! Babel is converting this to be functional JavaScript
//? Good when using create-react-app, not good in a vanilla JS scenario
