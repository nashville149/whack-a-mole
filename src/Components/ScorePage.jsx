import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScorePage.css';

function ScorePage() {
  const navigate = useNavigate();
  const score = localStorage.getItem('highScore') || 0;

  return (
    <div className="score-container">
      <h1>Your High Score</h1>
      <h2>{score}</h2>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default ScorePage;
