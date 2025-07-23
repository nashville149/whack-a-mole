import React, { useState, useEffect } from 'react';

const GameTimer = ({ startTime = 30, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(startTime);
    const [isRunning,setIsRunning] = useState(false);


useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
        timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
}

if (timeLeft === 0 && isRunning) {
    setIsRunning(false);
    alert('Time is up!');
    if (onTimeUp) onTimeUp(); 
}

return () => clearInterval(timer);
}, [isRunning, timeLeft, onTimeUp]);

const startTimer = () => {
    setIsRunning(true);
    setTimeLeft(startTime);
};

return (
    <div className='game-timer'>
        <h2>Time Left: {timeLeft} seconds</h2>
        <button onClick ={startTimer} disabled={isRunning}>
            {isRunning ? 'Running...' : 'Start Timer'}
        </button>
    </div>
    );
};
export default GameTimer;





