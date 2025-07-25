import React from 'react';
import {useNavigate} from 'react-router-dom';
import './ScorePage.css';

function ScorePage() {
  const navigate = useNavigate();
  const score = localStorage.getItem('highScore') || 0;

  return (
    <div className="score-container">
      <h1>Your High Score is</h1>
      <h2>{score}</h2>

      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        🐹 Keep whacking to beat your high score! 🐹 
      </p>

      <img
        src={require('../CuteMole.png')}
        alt="Mole"
        style={{ width: '150px', margin: '20px auto' }}
      />

      <button
        style={{ display: 'block', margin: '20px auto' }}
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ScorePage;
