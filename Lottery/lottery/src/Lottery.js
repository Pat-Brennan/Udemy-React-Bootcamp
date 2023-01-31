import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		numBalls: 6,
		maxNum: 40,
	};
	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.numBalls }) };
		this.handleClick = this.handleClick.bind(this);
	}
	generate() {
		this.setState((curState) => ({
			nums: curState.nums.map(
				(n) => Math.floor(Math.random() * this.props.maxNum) + 1
			),
		}));
	}

	handleClick() {
		this.generate();
	}

	render() {
		return (
			<section>
				<h1> {this.props.title} </h1>
				<div>
					{/* Using .map() to iterate over our props to generate lotto balls */}
					{this.state.nums.map((n) => (
						<Ball num={n} />
					))}
				</div>
				<button className='Button' type='submit' onClick={this.handleClick}>
					GENERATE THE BALLS
				</button>
			</section>
		);
	}
}

export default Lottery;
