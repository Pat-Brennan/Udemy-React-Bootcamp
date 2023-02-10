import React, { Component } from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1, 2, 3, 4, 5],
		};
	}

	remove(num) {
		this.setState((st) => ({
			numbers: st.numbers.filter((n) => n !== num),
		}));
	}

	render() {
		let numbers = this.state.numbers.map((n) => (
			<NumberItem value={n} remove={() => this.remove(n)} />
		));
		return (
			<div>
				<h1> First Number List </h1>
				<ul>{numbers}</ul>
			</div>
		);
	}
}

export default NumberList;
