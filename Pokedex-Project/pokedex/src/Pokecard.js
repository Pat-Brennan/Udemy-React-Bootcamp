import React, { Component } from 'react';

const POKE_API =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component {
	render() {
		let imgsrc = `${POKE_API}${this.props.id}.png`;
		return (
			<div className='Pokecard'>
				<h1> {this.props.name} </h1>
				<img src={imgsrc} alt='' />
				<h2> Type : {this.props.type}</h2>
				<h2> Exp : {this.props.exp}</h2>
			</div>
		);
	}
}

export default Pokecard;

// function Pokecard() {
// 	return (
// 		<div className='Pokecard'>
//       <h1> Do I work? </h1>
// 		</div>
// 	);
// }

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
