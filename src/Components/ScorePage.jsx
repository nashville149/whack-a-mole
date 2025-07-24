 import React from 'react';

 function ScorePage() {
   const score = localStorage.getItem('highScore') || 0;

   return (
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
       <h1>Your High Score</h1>
       <h2>{score}</h2>
       <button onClick={() => window.history.back()}>Go Back</button>
     </div>
   );
 }

 export default ScorePage;



