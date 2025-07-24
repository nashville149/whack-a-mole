import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import Game from './Pause'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Game/>
  </StrictMode>
);

