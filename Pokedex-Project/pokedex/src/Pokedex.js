import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		let title;
		if (this.props.isWinner) {
			title = <h1 className='Pokedex-winner'> Winner! </h1>;
		} else {
			title = <h1 className='Pokedex-loser'> Loser! </h1>;
		}
		return (
			<div className='Pokedex'>
				{title}
				<p className='Pokedex-exp'>Total Experience: {this.props.exp}</p>
				<div className='Pokedex-cards'>
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

// function Pokedex() {
//   return <Pokecard  id={ 4 } name='Charmander' type='Fire' base_experience={ 62 } />
// }

export default Pokedex;
