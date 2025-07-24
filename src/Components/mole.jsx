import React from 'react';

const Mole = ({ visible, onWhack }) => {
  return (
    <div className="hole" onClick={visible ? onWhack : null}>
      {visible && <img src="/CuteMole.png" alt="mole" className="mole" />}
    </div>
  );
};

export default Mole;
