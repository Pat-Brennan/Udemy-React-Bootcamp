import React, { Component } from 'react';
import BetterNumberItem from './BetterNumberItem';

//* Naming Conventions!
//? To keep track of things, it can be helpful to use specific naming patterns.
//? In this case, we have a remove() function
//? remove() is then called inside the child component with handleRemove().
//? In other words, | action/handleAction | is the pattern.
class BetterNumberList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1, 2, 3, 4, 5],
		};
		this.remove = this.remove.bind(this);
	}

	remove(num) {
		console.log('INSIDE REMOVE FUNCTION');
		this.setState((st) => ({
			numbers: st.numbers.filter((n) => n !== num),
		}));
	}

	render() {
		let numbers = this.state.numbers.map((n, idx) => (
			<BetterNumberItem key={idx} value={n} remove={this.remove} />
		));
		return (
			<div>
				<h1> Better Number List </h1>
				<ul>{numbers}</ul>
			</div>
		);
	}
}

export default BetterNumberList;
