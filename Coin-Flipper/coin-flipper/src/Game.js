import React, { Component } from 'react';
import { winner } from './helpers.js';
import Player from './Player.js';
import './Game.css'

class Game extends Component {
	static defaultProps = {
		players: [
			{
				player: 'sluggo',
				imgSrc:
					'https://www.nicepng.com/png/detail/237-2372545_moliuskai-ir-kirmls-spanish-slug.png',
			},
			{
				player: 'snailbert',
				imgSrc:
					'https://www.nicepng.com/png/detail/103-1031863_animals-snails-snail-png.png',
			},
		],
	};
	constructor(props) {
		super(props);
		this.state = {
			currWinner: null,
			battles: 0,
			sluggoWins: 0,
			snailbertWins: 0,
		};
		this.handleClick = this.handleClick.bind(this);
		this.battle = this.battle.bind(this);
	}
	battle() {
		const victor = winner(this.props.players);
		this.setState((st) => {
			return {
				currWinner: victor,
				battles: st.battles + 1,
				sluggoWins: st.sluggoWins + (victor.player === 'sluggo' ? 1 : 0),
				snailbertWins: st.snailbertWins + (victor.player === 'snailbert' ? 1 : 0),
			};
		});
	}
	handleClick(e) {
		this.battle();
	}
	render() {
		return (
			<div className='Game'>
				<h1> Sluggo vs. Snailbert </h1>
        { this.state.currWinner && <Player info={this.state.currWinner} />}
				<button type='submit' onClick={this.handleClick}>
					Giv'em the Slime!
        </button>
				<h2> Out of {this.state.battles} battles </h2>
				<h3>
					Sluggo: {this.state.sluggoWins} Snailbert: {this.state.snailbertWins}
				</h3>
			</div>
		);
	}
}

export default Game;

//? random number to determine if sluggo or snailbert is displayed
//? Using onclick
