import React from 'react';

const Timer = ({ timeLeft, isGameOver }) => (
  <div>
    {isGameOver ? 'Game Over' : `Time left: ${timeLeft} seconds`}
  </div>
);

export default Timer;
