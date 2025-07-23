import React from 'react';
import './GamePage.css';
import moleImg from '../CuteMole.png';
import { Link } from 'react-router-dom';

function GamePage() {
  const holes = Array(9).fill(0);

  return (
    <div className="game-container">
      <header className="game-header">
        <Link to="/" className="home-button">HOME</Link>
        <span>WHACK-A-MOLE</span>
        <span>BEST SCORE: 70</span>
      </header>

      <div className="timer">TIMER: 0:00</div>

      <div className="grid">
        {holes.map((_, index) => (
          <div key={index} className="hole">
            <img src={moleImg} alt="Mole" className="mole" />
          </div>
        ))}
      </div>

      <div className="score-box">SCORE: 90</div>

      <button className="new-game-button">NEW GAME</button>
    </div>
  );
}

export default GamePage;


