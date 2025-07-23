import React from "react";

function App() {
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        setGameStarted(true);
    };

    return (
        <div className ="App">
            <h1>Welcome to Whack-a-Mole</h1>
            <button onClick ={startGame}>Start Game </button>
            {gameStarted && (
    <div>
        <h2>Game Started!</h2>
        <p>This is where game will appear</p>
    </div>
    )}
         </div>
);
}
export default App;