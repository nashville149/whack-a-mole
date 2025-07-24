

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Startscreen from './Components/Startscreen';
import GamePage from './Components/GamePage';
import ScorePage from './Components/ScorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Startscreen />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/scores" element={<ScorePage />} />
    </Routes>
  );
}

export default App;
