import React from "react";
import './styles.css';
import playerX from '../../images/player-x.png';

const Player = () => {
    return (
        <button className="player">
            <img src={playerX} alt="Jogador X" />
        </button>
    )
}

export default Player