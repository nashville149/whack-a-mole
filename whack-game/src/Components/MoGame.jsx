import React, {  useState } from "react";

function GameBod() {
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

  return (
    <div>
      <h2>Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
      {isNewHighScore && <h3>🎉 New High Score! 🎉</h3>}
      <button onClick={handleWhack}>Whack Mole!</button>
    </div>
  );
}

export default GameBod;