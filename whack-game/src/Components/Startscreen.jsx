import React, { useState, useEffect } from "react";

const levels = {
  easy: 1500,
  medium: 1000,
  hard: 500,
};

function MoleGame() {
  const [level, setLevel] = useState("easy");
  const [moleVisible, setMoleVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoleVisible((prev) => !prev); // Toggle mole visibility
    }, levels[level]);

    return () => clearInterval(interval); // Cleanup on level change
  }, [level]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Whac-A-Mole </h1>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Select Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="easy">Easy </option>
          <option value="medium">Medium </option>
          <option value="hard">Hard </option>
        </select>
      </div>

      <div className="mt-6">
        {moleVisible ? (
          <div className="text-4xl">Mole is up!</div>
        ) : (
          <div className="text-4xl opacity-30">No mole</div>
        )}
      </div>
    </div>
  );
}

export default MoleGame;
