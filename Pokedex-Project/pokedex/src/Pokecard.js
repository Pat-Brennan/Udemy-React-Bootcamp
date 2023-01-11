import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API =
// 	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
	render() {
		let imgsrc = `${POKE_API}${padToThree(this.props.id)}.png`;
		return (
			<div className='Pokecard'>
				<h1 className='Pokecard-title'> {this.props.name} </h1>
				<img src={imgsrc} alt='' />
				<h2 className='Pokecard-data'> Type : {this.props.type}</h2>
				<h2 className='Pokecard-data'> Exp : {this.props.exp}</h2>
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
