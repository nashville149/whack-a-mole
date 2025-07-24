import React, { useState } from 'react';

import Game from './scoreboard';


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState("easy"); // 🟡 Moved level state here

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Whack-a-Mole</h1>

      {!gameStarted && (
        <>
          {/* 🟡 Level Selector BEFORE starting */}
          <div className="mb-4">
            <label className="mr-2 font-semibold">Select Level:</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="border p-1 rounded"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
            
          <button onClick={startGame} className="bg-green-500 text-white px-4 py-2 rounded">
            Start Game
          </button>
        </>
      )}

      {gameStarted && (
        <div>
          <h2 className="text-xl font-semibold mt-4">Game Started!</h2>
          
          <Game />
         
        </div>
      )}
    </div>
  );
}

export default App;
