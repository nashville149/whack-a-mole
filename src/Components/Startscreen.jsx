import React, { useState } from 'react';
import './Startscreen.css';
import { useNavigate } from 'react-router-dom';

function Startscreen() {
  const navigate = useNavigate();
  const [level, setLevel] = useState("medium");

  const handleStart = () => {
    navigate(`/game?level=${level}`);
  };

  const handleScores = () => {
    navigate('/scores');
  };

  return (
    <div className="start-page">
      <h1>Whack-a-Mole</h1>
      <img src="/CuteMole.png" alt="Mole" className="mole-img" />

      <div className="level-select">
        <label>Select Level:</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="easy">Easy (1200)</option>
          <option value="medium">Medium (800)</option>
          <option value="hard">Hard (500)</option>
        </select>
      </div>

      <button onClick={handleStart}>Start Game</button>
      <button onClick={handleScores}>View Scores</button>
    </div>
  );
}

export default Startscreen;

