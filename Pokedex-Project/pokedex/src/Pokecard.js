import React, { Component } from 'react';

class Pokecard extends Component {
  render() {
    return (
      <div>
        <h1> { this.props.type }</h1>
      </div>
    )
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
