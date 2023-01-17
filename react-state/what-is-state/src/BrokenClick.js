import React, { Component } from 'react';

class BrokenClick extends Component {
	constructor(props) {
		super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
  //? The keyword 'this' gets bound to individual components
  //! So without the 'this.handleClick.bind(this)' above, React doesn't know what 'this' is!

  //? Instance method to set the state of the click
	handleClick(e) {
		this.setState({ clicked: true });
	}

	render() {
		return (
			<div>
				<h1>{this.state.clicked ? 'Now you see me...' : "Now you don't! Oh wait..."}</h1>
				<button onClick={this.handleClick}> Houdini's Greatest Trick </button>
			</div>
		);
	}
}

export default BrokenClick;
