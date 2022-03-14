import React from "react";
export default function Card(props) {
  const {
    card: { src, cardName },
    gameLogic
  } = props;

  return (
    <div className="card">
      <button  
      onClick={gameLogic.bind(this, cardName)}>
        <div>
          <img src={src} alt={cardName}/>
          <p>{cardName}</p>
        </div>
      </button>
    </div>
    
  )
}
