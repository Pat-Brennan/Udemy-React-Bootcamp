import React, { Component } from 'react';
import './Box.css';
import { choice } from './helpers';

class Box extends Component {
	constructor(props) {
		super(props);
		//? choice() is a helper function that grabs a random index
		this.state = { color: choice(this.props.colors) };
		this.handleClick = this.handleClick.bind(this);
	}

	pickColor() {
		let newColor;
		do {
			// A do block! How's it work...
			newColor = choice(this.props.colors); // do this.
		} while (newColor === this.state.color); // if newColor is equal to current color
		this.setState({ color: newColor }); // Try again and set the state of color to a new color
	}

	handleClick() {
		this.pickColor();
	}
	render() {
		return (
			<div
				className='Box'
				style={{ backgroundColor: this.state.color }}
				onClick={this.handleClick}></div>
		);
	}
}

export default Box;
