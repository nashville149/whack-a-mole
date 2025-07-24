import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game from './Components/scoreboard'
import MoleGame from './Components/level'
import GameTimer from './Components/Gametimer'
import App from './Components/Startscreen'
import Moles from './Components/moles'




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
   
   <Moles/>
  </StrictMode>,
)
