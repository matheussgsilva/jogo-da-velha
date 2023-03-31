import React from "react";
import './styles.css';
import playerX from '../../images/player-x.png';
import playerO from '../../images/player-o.png';

const Player = ({player}) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

    return (
        <button className="player">
            <img src={players[player]} alt={`Jogador ${player}`} />
        </button>
    )
}

export default Player