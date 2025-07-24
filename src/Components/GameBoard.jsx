import React from "react";
import moleImg from '../CuteMole.png' ;
import './Game.css';

function GameBoard({ moles, handleWhack }) {
  return (
    <div className="game-board">
      {moles.map((visible, index) => (
        <div
          key={index}
          className={`mole-hole ${visible ? "active" : ""}`}
          onClick={() => handleWhack(index)}
        >
          {visible && <img src={moleImg} alt="Mole" className="mole" />}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;

