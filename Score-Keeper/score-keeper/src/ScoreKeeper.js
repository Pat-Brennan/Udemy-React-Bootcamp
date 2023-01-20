import React, { Component } from 'react';

class ScoreKeeper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
		};
		this.singleKill = this.singleKill.bind(this);
		this.tripleKill = this.tripleKill.bind(this);
	}

	singleKill() {
		//? Not a great idea to update state like this
		//? Especially if it relies on existing state values
		this.setState({ score: this.state.score + 1 });
	}

	//! For example, this would not work due to how react batches calls!
	// tripleKill() {
	//   this.setState({ score: this.state.score + 1 });
	//   this.setState({ score: this.state.score + 1 });
	//   this.setState({ score: this.state.score + 1 });
	// }

	//? This on the other hand will work, because we've made everything a CALLBACK
	// tripleKill() {
	// 	this.setState((currentState) => {
	// 		return { score: currentState.score + 1 };
	// 	});
	// 	this.setState((currentState) => {
	// 		return { score: currentState.score + 1 };
	// 	});
	// 	this.setState((currentState) => {
	// 		return { score: currentState.score + 1 };
	// 	});
	// }

	//* Abstracting State Updates
	//? this.setState lends itself nicely to a more advanced pattern call functional setState
	//? Basically its describing your state updates abstractly as separate functions.

	incrementCounter(currentState) {
		return { score: currentState.score + 1 };
	}

  tripleKill() {
    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
  }

	render() {
		return (
			<div>
				<h1> Your Score is: {this.state.score} </h1>
				<button type='submit' onClick={this.singleKill}>
					Kill it!
				</button>
				<button type='submit' onClick={this.tripleKill}>
					Triple Kill it!
				</button>
			</div>
		);
	}
}

export default ScoreKeeper;
