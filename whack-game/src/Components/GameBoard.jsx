import React from "react";
import mole from './mole';

const GameBoard = ({ moles, handlewhack }) => {
    return (
        <div className="game-board">
            {moles.map((isVisible, index) => (
                <mole
                    key={index}
                    Visible={isVisible}
                    onwhack={() => handlewhack(index)}
                />
            ))}
        </div>
    )
};

export default GameBoard;