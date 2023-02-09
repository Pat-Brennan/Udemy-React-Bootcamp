import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
	dispenseWisdom() {
		let messages = ['hey', 'there', 'I', 'am', 'a', 'skull'];
		let rIndex = Math.floor(Math.random() * messages.length);
		console.log(messages[rIndex]);
	}
	render() {
		return (
			<div
				className='WiseSquare'
				onMouseEnter={this.dispenseWisdom}
				onMouseLeave={this.dispenseWisdom}>
				<h1>Is it Wisdom you seek?</h1>
				<h2>💀</h2>
			</div>
		);
	}
}

export default WiseSquare;
