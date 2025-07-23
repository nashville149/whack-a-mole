 import React, { useState, useEffect } from "react";

 function Game() {
   const [paused, setPaused] = useState(true);     // Game starts paused
   const [count, setCount] = useState(0);          // Example game counter
   const [showMenu, setShowMenu] = useState(true); // Controls the menu display

   useEffect(() => {
     if (paused) return;

     const interval = setInterval(() => {
       setCount((c) => c + 1);
     }, 1000); // Game logic interval

     return () => clearInterval(interval);
   }, [paused]);

   function handleStart() {
     setPaused(false);
     setShowMenu(false);
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
     setCount(0);
     setPaused(false);
     setShowMenu(false);
   }

   return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
       <h1>Game Count: {count}</h1>

      {showMenu ? (
         <div style={{ marginTop: "20px" }}>
           <h2>{count === 0 ? "Welcome to the Game" : "Game Paused"}</h2>
           {count === 0 ? (
             <button onClick={handleStart}>Start Game</button>
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



