import React from 'react';
import './player.css';

const Player = props => (
    <div className='player'>
        <h2>{props.player.tag}</h2>
    </div>
)

export default Player;
