import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Game from './Components/scoreboard'
import MoleGame from './Components/Startscreen'
import GameBod from './Components/Gametimer'
import Mole from './Components/mole'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Game/>
   <Mole/>
   <MoleGame/>
   <GameBod/>
  </StrictMode>,
)
