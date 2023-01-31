import React, { Component } from 'react';
import './Ball.css';
//! THIS IS A DISPLAY COMPONENT
//? It contains no STATE or EVENTS
class Ball extends Component {
	render() {
		return <div className='Ball'>{this.props.num}</div>;
	}
}

export default Ball;
