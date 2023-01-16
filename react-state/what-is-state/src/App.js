import React, { Component } from 'react';
import Game from './Game';
import Rando from './rando';
import './App.css';
import Demo from './Demo';

class App extends Component {
	render() {
		return (
			<div className='App'>
        <Game />
        <Demo animal='Bobcat' food='Pineapples' />
        <Rando maxNum={ 7 } />
			</div>
		);
	}
}

export default App;
