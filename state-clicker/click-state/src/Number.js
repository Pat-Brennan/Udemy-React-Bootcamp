import React, { Component } from 'react';

class Number extends Component{
  constructor(props) {
    super(props);
  }
  rando() {
    return Math.floor(Math.random() * 10)
  }
  render() {
    return (
      <div>
        <h1>Number is { this.rando() } </h1>
        <button type="Submit"> RANDOMIZE! </button>
      </div>
    )
  }
}

export default Number;

//TODO Render a random number in the header
//TODO Have that random number change when we click randomize