import React, {useState} from 'react'
import CardData from './CardData'

export default function ScoreKeeper() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)
  const [usedCards, setUsedCards] = useState([]);

  const scoreHandler = () => {
    setScore((prevScore) => prevScore + 1);
  }
  const highScoreHandler = () => {
    setHighScore(score)
  }
  const cardHandler = (cardName) => {
    setUsedCards((array) => [...array, cardName])
  }
  const resetGame = () => {
    setScore(0)
    setUsedCards([])
  };
  const gameLogic = (cardName) => {
    if (!usedCards.includes(cardName)){
      cardHandler(cardName);
      scoreHandler();
    } else {
      if (score > highScore){
        highScoreHandler();
      }
      resetGame();
    }
  }
  return (
    <div className='container'>
        <header>
          <h1>Memory Game, Animal Edition</h1>
          <h1>Score: {score}</h1>
          <h2>High Score: {highScore}</h2>
        </header>
        <div className='intimate-card-container'>
          <CardData
          gameLogic={gameLogic}
          score={score}
          highScore={highScore}
          />
      </div>
    </div>
  )
}
