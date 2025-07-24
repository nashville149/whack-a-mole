import React from "react";
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
          {visible && <img src="/CuteMole.png" alt="Mole" className="mole-img" />}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;

