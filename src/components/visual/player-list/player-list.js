import React from 'react';
import './player-list.css';
import Player from '../player/player.js';

const PlayerList = props => (
    <div className='player-list'>
        {props.players.map((player, key) => {
            return <Player key={key} player={player} />
        })}
    </div>
)

export default PlayerList;
