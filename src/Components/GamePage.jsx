import React, { useState } from 'react';
import GameTimer from './Gametimer';
import GameBoard from './GameBoard';
import './GamePage.css';

function GamePage() {
  const [score, setScore] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const handleWhack = () => {
    if (!paused && !timeUp) {
      setScore(score + 1);
    }
  };

  const handleTimeUp = () => {
    setPaused(true);
    setTimeUp(true);
    alert('Time is up! Your score: ' + score);
  };

  return (
    <div className="game-container">
      <GameTimer startTime={30} paused={paused} onTimeUp={handleTimeUp} />
      <h2>Score: {score}</h2>
      <GameBoard moles={[true, false, true, false, true, false, false, true, false]} handleWhack={handleWhack} />
      {/* Add Pause / Resume Buttons here */}
    </div>
  );
}

export default GamePage;
