import React from 'react';
import './Card.css';

const Card = ({ onClick, id, number, isFlipped }) => (
  <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(id)}>
    <div className="card-back"></div>
    <div className="card-front">{isFlipped ? number : ''}</div>
  </div>
);

export default Card;
