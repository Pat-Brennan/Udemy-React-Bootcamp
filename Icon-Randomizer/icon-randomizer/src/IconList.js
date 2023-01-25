import React, { Component } from 'react';

//* Immutable State Updates
//? A much better way is to make a new copy of the data structure in question.
//? We can use any PURE Functions to do this.(.map, .filter, .reduce and the ... spread operator)

//? There is a slight efficiency cost due to the O(N) space/time required to make a copy,
//? But it's almost always worth it to ensure that your app doesn't have extremely ->
//? difficult to detect bugs due to mischevious side effects.

//* Minimize your State
//? In React, you want to try to put as little data in state as possible.
//? Things to consider, Does 'x' change? If not, 'x' should not be part of the state. It should be a prop!
//? Is 'x' already captured by some other value 'y' in state or props? DERIVE from it there instead.

//* Example of BAD STATE DESIGN
//? Let's imagine this is a person. What will change in terms of a persons state?
// this.state = {
//   firstName: 'Bongo', - This shouldn't change very often : Make it a prop!
//   lastName: 'Popples', - This shouldn't change very often : Make it a prop!
//   birthday: '666-420-69', - This shouldn't change very often : Make it a prop!
//   age: '666', - this can be derived from props based on birthday : Make it a prop!
//   mood: 'Angry!' - THIS COULD CHANGE OFTEN. Keep it in STATE!
// }

//* Example of GOOD STATE DESIGN
//? Establish what will not change, and put that shit in props
// this.props = {
//   firstName: 'Bongo',
//   lastName: 'Popples',
//   birthday: '666-420-69',
//   age: '666'
// }

//? Establish what will change, and put that shit in state
// this.state = {
//   mood: 'ANGRY!'
// }

//* State should live on the PARENT
//! We want to support the "DOWNWARD DATA FLOW" Philosophy of React!
//? In general, it makes more sense for a parent component to manage state, ->
//? and have a bunch of "dumb" stateless child display components.
//? This makes deubgging easier, because the state is CENTRALIZED.
//? In other words, it's easier to predict where to find state.

//* State Debugging
//? Is the current component stateless?
//? Find out what is rendering it.
//? There's the state. (More than likely)

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
