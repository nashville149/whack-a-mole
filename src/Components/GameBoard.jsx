import React from 'react';
import Mole from './mole';

const GameBoard = ({ moles, handleWhack }) => {
  return (
    <div className="grid">
      {moles.map((visible, index) => (
        <Mole
          key={index}
          visible={visible}
          onWhack={() => handleWhack(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
