import React, { Component } from 'react';

//* Immutable State Updates
//? A much better way is to make a new copy of the data structure in question.
//? We can use any PURE Functions to do this.(.map, .filter, .reduce and the ... spread operator)

//? There is a slight efficiency cost due to the O(N) space/time required to make a copy,
//? But it's almost always worth it to ensure that your app doesn't have extremely ->
//? difficult to detect bugs due to mischevious side effects.

class IconList extends Component {
	static defaultProps = {
		options: [
			'angry',
			'anchor',
			'archive',
			'at',
			'archway',
			'baby',
			'bell',
			'bolt',
			'bone',
			'car',
			'cloud',
			'city',
			'couch',
		],
	};
	constructor(props) {
		super(props);
		this.state = { icons: ['bone'] };
		this.addIcon = this.addIcon.bind(this);
	}
	//? The thing is... this will work. But isn't * The React Way *
	// addIcon() {
	// 	let idx = Math.floor(Math.random() * this.props.options.length);
	//   let newIcon = this.props.options[idx];
	//   let icons = this.state.icons;
	//   icons.push(newIcon);
	//   this.setState({icons: icons})
	// }
	//? Similar to the above, but adjustment in terms of how we SET STATE.
	addIcon() {
		let idx = Math.floor(Math.random() * this.props.options.length);
		let newIcon = this.props.options[idx];
		//? The spread operator( ... ) makes a COPY of the current state(this.state.icons)
		//? It is then updated with newIcon (this.props.options[idx])
		this.setState({ icons: [...this.state.icons, newIcon] });
	}
	render() {
		const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
		return (
			<div>
				<h1> ☀️ ICONS 🌈 </h1>
				<h2> {icons} </h2>
				<button type='submit' onClick={this.addIcon}>
					Add New Icon!
				</button>
			</div>
		);
	}
}

export default IconList;
