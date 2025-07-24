import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Startscreen from './Components/Startscreen';
import GamePage from './Components/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Startscreen />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
