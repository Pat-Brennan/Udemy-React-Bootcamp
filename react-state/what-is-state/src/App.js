import React, { Component } from 'react';
import Game from './Game';
import Rando from './rando';
import Demo from './Demo';
import Button from './Button';
import BrokenClick from './BrokenClick';
import './App.css';


class App extends Component {
	render() {
		return (
			<div className='App'>
        <Game />
        <Demo animal='Bobcat' food='Pineapples' />
        <Rando maxNum={7} />
        <Button />
        <BrokenClick />
			</div>
		);
	}
}

export default App;
