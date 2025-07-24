import React, { useState, useEffect } from "react";
import "./GamePage.css";

function GameBoard() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  function handleWhack() {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
      setIsNewHighScore(true);
    }
  }

  useEffect(() => {
    if (isNewHighScore) {
      const timer = setTimeout(() => setIsNewHighScore(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isNewHighScore]);

  return (
    <div>
      <h2>Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
      {isNewHighScore && <h3>🎉 New High Score! 🎉</h3>}
      <button onClick={handleWhack}>Whack Mole!</button>
    </div>
  );
}

export default GameBoard;
