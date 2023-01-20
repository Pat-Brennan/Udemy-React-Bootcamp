import React, { Component } from 'react';

class Kill extends Component {
	constructor(props) {
		super(props);
		this.state = {
			kills: 0,
		};
		this.killStreak = this.killStreak.bind(this);
	}

	incrementScore(currentState) {
		return { kills: currentState.Kills + 1 };
  }
  
  killStreak() {
    this.setState(this.incrementScore)
  }

	render() {
		return (
			<div>
				<h1>Your Kill Streak is: {this.state.kills} </h1>
				<button onClick={this.killStreak}> Kill Kill Kill! </button>
			</div>
		);
	}
}

export default Kill;
