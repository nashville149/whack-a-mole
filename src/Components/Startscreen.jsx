import React from 'react';
import './Startscreen.css';
import { useNavigate } from 'react-router-dom';

function Startscreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game');
  };

  return (
    <div className="start-page">
      <h1>Whack-a-Mole</h1>
      <img src="/CuteMole.png" alt="Mole" className="mole-img" />
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
}

export default Startscreen;
