import React, { useState, useEffect } from 'react';
import Card from './Card';
import Buck from './img/buck.jpg';
import Cat from './img/cat.jpg';
import Chameleon from './img/chameleon.jpg';
import Dog from './img/dog.jpg';
import Fox from './img/fox.jpg';
import Giraffe from './img/giraffe.jpg';
import Horse from './img/horse.jpg';
import Parrot from './img/parrot.jpg';
import Squid from './img/squid.jpg';
import Squirrel from './img/squirrel.jpg';
import Tiger from './img/tiger.jpg';
import Duck from './img/duck.jpg';

export default function CardData(props) {
  const { gameLogic, score, highScore } = props;

  const cardObj = [
    {
      src: Buck,
      cardName: 'Bucky Brap',
      cardPic: './img/buck.jpg',
      cardId: 1
  },
  {
      src: Cat,
      cardName: 'Catie Claws',
      cardPic: './img/cat.jpg',
      cardId: 2
  },
  {
      src: Chameleon,
      cardName: 'Chameleonaire',
      cardPic: './img/chameleon.jpg',
      cardId: 3
  },
  {
      src: Duck,
      cardName: 'Ducky Drip',
      cardPic: './img/duck.jpg',
      cardId: 4
  },
  {
      src: Fox,
      cardName: 'Frisky Fox',
      cardPic: './img/fox.jpg',
      cardId: 5
  },
  {
      src: Giraffe,
      cardName: 'Greg the Giraffe',
      cardPic: './img/giraffe.jpg',
      cardId: 6
  },
  {
      src: Horse,
      cardName: 'Henrietta the Horse',
      cardPic: './img/horse.jpg',
      cardId: 7
  },
  {
      src: Parrot,
      cardName: 'Petey Parrot',
      cardPic: './img/parrot.jpg',
      cardId: 8
  },
  {
      src: Squid,
      cardName: 'Sandy the Squid',
      cardPic: './img/squid.jpg',
      cardId: 9
  },
  {
      src: Squirrel,
      cardName: 'Speedy Squirrel',
      cardPic: './img/squirrel.jpg',
      cardId: 10
  },
  {
      src: Tiger,
      cardName: 'Tim El Tigre',
      cardPic: './img/tiger.jpg',
      cardId: 11
  },
  {
      src: Dog,
      cardName: 'Woof Dogg',
      cardPic: './img/dog.jpg',
      cardId: 12
  }
  ]
  const [cards, setNewCards] = useState(cardObj);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  },[score, highScore])

  return (
    <div className='card-container'>
      {cards.map((card) => (
        <Card card={card} key={card.cardName} gameLogic={gameLogic}/>
      ))}
    </div>
  )
}
