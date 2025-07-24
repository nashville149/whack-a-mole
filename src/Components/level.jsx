import React, { useState, useEffect } from "react";
import "./GamePage.css"; // Optional: if you style the game here

const levels = {
  easy: 1500,
  medium: 1000,
  hard: 500,
};

function MoleGame({ level }) {
  const [moleVisible, setMoleVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoleVisible((prev) => !prev);
    }, levels[level]);

    return () => clearInterval(interval);
  }, [level]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Whac-A-Mole</h1>
      <div className="mt-6">
        {moleVisible ? (
          <img src="/CuteMole.png" alt="Mole" className="mole-img" />
        ) : (
          <div className="text-4xl opacity-30">No mole</div>
        )}
      </div>
    </div>
  );
}

export default MoleGame;
