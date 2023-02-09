import React, { Component } from 'react';

class CopyDemo extends Component {
	handleCopy() {
		alert("You're a duck thief!");
	}

	render() {
		return (
			<div>
				<h3>Fresh Bird Copies!</h3>
				<section
					style={{ width: '300px', display: 'inline-block' }}
					onCopy={this.handleCopy}>
					🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆
					🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆
					🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆
					🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆
					🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆 🦆🦆🦆
				</section>
			</div>
		);
	}
}

export default CopyDemo;
