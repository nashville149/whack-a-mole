import React, { useState, useEffect } from "react";
import GameTimer from "./Gametimer";
import GameBoard from "./GameBoard";  // your mole grid component

const MOLE_COUNT = 9; // say you have 9 holes

function Game() {
  const [paused, setPaused] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [started, setStarted] = useState(false);
  const [moles, setMoles] = useState(Array(MOLE_COUNT).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!paused) {
      const moleInterval = setInterval(() => {
        const nextMoles = Array(MOLE_COUNT).fill(false);
        const randomIndex = Math.floor(Math.random() * MOLE_COUNT);
        nextMoles[randomIndex] = true;
        setMoles(nextMoles);
      }, 1000);
      return () => clearInterval(moleInterval);
    } else {
      setMoles(Array(MOLE_COUNT).fill(false)); // hide moles if paused
    }
  }, [paused, resetKey]);

  const handleWhack = (index) => {
    if (moles[index]) {
      setScore((prev) => prev + 1);
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
    }
  };

  function handleStart() {
    setPaused(false);
    setShowMenu(false);
    setStarted(true);
    setScore(0);
  }

  function handleResume() {
    setPaused(false);
    setShowMenu(false);
  }

  function handlePause() {
    setPaused(true);
    setShowMenu(true);
  }

  function handleRestart() {
    setResetKey((prev) => prev + 1);
    setPaused(false);
    setShowMenu(false);
    setStarted(true);
    setScore(0);
  }

  function handleTimeUp() {
    setPaused(true);
    setShowMenu(true);
    alert(`Time is up! Your score: ${score}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Score: {score}</h2>
      <GameTimer
        startTime={30}
        paused={paused}
        resetTrigger={resetKey}
        onTimeUp={handleTimeUp}
      />

      {showMenu ? (
        <div style={{ marginTop: "20px" }}>
          <h2>{started ? "Timer Paused" : "Timer Ready"}</h2>
          {!started ? (
            <button onClick={handleStart}>Start</button>
          ) : (
            <>
              <button onClick={handleResume}>Resume</button>
              <button onClick={handleRestart} style={{ marginLeft: "10px" }}>
                Restart
              </button>
            </>
          )}
        </div>
      ) : (
        <button onClick={handlePause} style={{ marginTop: "20px" }}>
          Pause
        </button>
      )}

      <GameBoard moles={moles} handleWhack={handleWhack} />
    </div>
  );
}

export default Game;
