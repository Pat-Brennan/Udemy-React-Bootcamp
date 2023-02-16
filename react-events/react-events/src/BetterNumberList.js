import React, { Component } from 'react';
import BetterNumberItem from './NumberItem';

class BetterNumberList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1, 2, 3, 4, 5],
    };
    this.remove = this.remove.bind(this);
	}

	remove(num) {
		this.setState((st) => ({
			numbers: st.numbers.filter((n) => n !== num),
		}));
	}

	render() {
		let numbers = this.state.numbers.map((n) => (
			<BetterNumberItem value={n} remove={this.remove} />
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