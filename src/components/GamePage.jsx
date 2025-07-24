import React, { useState } from 'react';
import './GamePage.css';
import moleImg from '../CuteMole.png';
import { Link } from 'react-router-dom';
import hammerCursor from './hammer.png';

  function GamePage() {
  const [showLevels, setShowLevels] = useState(false);
  const toggleLevels = () => {
    setShowLevels(!showLevels);
  };
  const holes = Array(9).fill(0);

  return (
    <div className="game-container">
      <header className="game-header">
        <Link to="/" className="home-button">HOME</Link>
        <div className="levels-container">
        <button className="levels-button" onClick={toggleLevels}>LEVELS</button>
        {showLevels && (
        <div className="levels-dropdown">
        <button>easy</button>
        <button>medium</button>
        <button>hard</button>
      </div>
    )}
  </div>
  
      </header>

      <h1 className="game-title">WHACK-A-MOLE</h1> 

      
      <div className="timer">Timer display</div>

      <button className="pause">PAUSE</button>

      <div className="grid"  
        style={{ cursor: `url(${hammerCursor}), auto` }}>
        {holes.map((_, index) => (
          <div key={index} className="hole">
            <img src={moleImg} alt="Mole" className="mole" />
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default GamePage;
