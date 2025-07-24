import React, { useState } from "react";
import GameTimer from "./Gametimer";


function Game() {
    const [paused, setPaused] = useState(true);
    const [showMenu, setShowMenu] = useState(true);
    const [resetKey, setResetKey] = useState(0);
    const [started, setStarted] = useState(false); // Track if timer has ever started
  
    function handleStart() {
      setPaused(false);
      setShowMenu(false);
      setStarted(true);
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
    }
  
    function handleTimeUp() {
      setPaused(true);
      setShowMenu(true);
      alert("Time is up!");
    }
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
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
      </div>
    );
  }
  
  export default Game;