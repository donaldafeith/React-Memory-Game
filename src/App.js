import React, { useState, useEffect, useCallback } from 'react';
import Board from './Board';
import Timer from './Timer';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matches, setMatches] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isGameOver, setIsGameOver] = useState(false);

  const createCards = () => {
    const numbers = Array.from({ length: 13 }, (_, i) => i + 1).concat(
      Array.from({ length: 12 }, (_, i) => i + 1)
    );
    const shuffled = numbers.sort(() => 0.5 - Math.random());
    const newCards = shuffled.map((number) => ({
      number,
      isFlipped: false,
    }));
    setCards(newCards);
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft === 1) {
          clearInterval(timer);
          setIsGameOver(true);
        }
        return timeLeft - 1;
      });
    }, 1000);
  };

const flipCard = (id) => {
  if (isGameOver || cards[id].isFlipped || firstCard === id || secondCard === id || (firstCard !== null && secondCard !== null)) {
    return;
  }

  const newCards = cards.map((card, index) => ({
    ...card,
    isFlipped: index === id ? !card.isFlipped : card.isFlipped,
  }));
  setCards(newCards);

  if (firstCard === null) {
    setFirstCard(id);
  } else if (secondCard === null) {
    setSecondCard(id);
  }
};

const checkMatch = useCallback(() => {
  if (cards[firstCard].number === cards[secondCard].number) {
    setMatches(matches + 1);
    setFirstCard(null);
    setSecondCard(null);
  } else {
    setTimeout(() => {
      const newCards = cards.map((card, index) => {
        if (index === firstCard || index === secondCard) {
          return {
            ...card,
            isFlipped: false,
          };
        } else {
          return card;
        }
      });
      setCards(newCards);
      setFirstCard(null);
      setSecondCard(null);
    }, 1000);
  }
}, [cards, firstCard, secondCard, matches]);

  useEffect(() => {
    createCards();
    startTimer();
  }, []);

  useEffect(() => {
    if (firstCard !== null && secondCard !== null) {
      checkMatch();
    }
  }, [firstCard, secondCard, checkMatch]);

  const resetGame = () => {
    setIsGameOver(false);
    setMatches(0);
    setTimeLeft(120);
    setFirstCard(null);
    setSecondCard(null);
    createCards();
    startTimer();
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Board cards={cards} onCardClick={flipCard} />

    <Timer timeLeft={timeLeft} isGameOver={isGameOver} />
    <button onClick={resetGame}>Restart</button>
  </div>
);
};

export default App;
