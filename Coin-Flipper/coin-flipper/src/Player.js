import React, { Component } from 'react';
import './Player.css'

class Player extends Component {
	render() {
    return (
      <div className='Player'>
        <img src={this.props.info.imgSrc} />;
      </div>
    )
      
	}
}

export default Player;
