import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<button
				type='Submit'
				onClick={() => {
					alert("Help! I've been clicked!");
				}}>
				{' '}
				Commit a Crime{' '}
			</button>
		);
	}
}

export default Button;
