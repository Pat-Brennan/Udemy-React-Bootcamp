import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
	render() {
		return <Pokecard id={4} name='Charmander' type='Fire' base_experience={62} />;
	}
}

// function Pokedex() {
//   return <Pokecard  id={ 4 } name='Charmander' type='Fire' base_experience={ 62 } />
// }

export default Pokedex;
