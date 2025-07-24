import React, { useState, useEffect } from 'react';

const GameTimer = ({ startTime = 30, paused, onTimeUp, resetTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (!paused && timeLeft > 0) {
      setIsRunning(true);
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (onTimeUp) onTimeUp();
    }

    return () => clearInterval(timer);
  }, [paused, timeLeft, isRunning, onTimeUp]);

  useEffect(() => {
    setTimeLeft(startTime);
    setIsRunning(false);
  }, [resetTrigger, startTime]);

  return (
    <div className="game-timer">
      <h2>Time Left: {timeLeft} seconds</h2>
    </div>
  );
};

export default GameTimer;
