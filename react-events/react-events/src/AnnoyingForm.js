import React, { Component } from 'react';

class AnnoyingForm extends Component {
	handleKeyUp(e) {
		if (e.keyCode === 56) {
			alert('********** THE 🌟🌟🌟 IS MY FAVORITE CHARACTER!!! ************');
		} else {
			alert("That's not it! You'll never guess 😈");
		}
	}

	render() {
		return (
			<div>
				<h3> Think you can guess my favorite key? 😏 </h3>
				<textarea onKeyUp={this.handleKeyUp} />
			</div>
		);
	}
}

export default AnnoyingForm;
