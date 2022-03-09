import './style.css';
import CardBuilder from './CardBuilder';
import React from 'react'
let App = () => {
  return (
    <div className="App">
      <h1 className='header'>Memory Game - Animal Edition</h1>
      <h3 className='score'>Score: {}</h3>
      <CardBuilder />
    </div>
  );
}

export default App;
