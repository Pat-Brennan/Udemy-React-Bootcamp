import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
	static defaultProps = {
		colors: ['red', 'cyan', 'gold'],
	};

	constructor(props) {
		super(props);
		this.state = { color: 'yellowgreen' };
	}

	changeColor(newColor) {
		this.setState({ color: newColor });
	}

	render() {
		return (
			<div className='ButtonList' style={{ backgroundColor: this.state.color }}>
				{this.props.colors.map((c) => {
					const colorObject = { backgroundColor: c };
					return (
						<button style={colorObject} onClick={this.changeColor.bind(this, c)}>
							I am a Button!
						</button>
					);
				})}
			</div>
		);
	}
}

export default ButtonList;
