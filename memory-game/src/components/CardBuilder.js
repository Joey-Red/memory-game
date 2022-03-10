import React, {useEffect} from "react";
import "./style.css"
import { Shuffle } from "window.Shuffle"
const CardBuilder = (props) => {
  let animalArray = {
    Buck: 'Brick Break',
    Cat: 'Cindy Claws',
    Chameleon: 'Carter Change',
    Dog: 'Dorothy Drools',
    Duck: 'Danica Drums',
    Fox: 'Frank Frolic',
    Giraffe: 'Georgie Glam',
    Horse: 'Hayley Hops',
    Parrot: 'Patsy Purps',
    Squid: 'Seth Swimmy',
    Squirrel: 'Sandy Sweets',
    Tiger: 'Tempie Tantrum',
  }
  // useEffect(()=>{
  // })
  // let cards = (".card");
  // for(let i = 0; i < cards.length; i++){
  //   let target = Math.floor(Math.random() * cards.length -1) + 1;
  //   let target2 = Math.floor(Math.random() * cards.length -1) +1;
  //   cards.eq(target).before(cards.eq(target2));
  // }
  const handleClick = () => {
    shuffleInstance.resetItems()
  }
  return ( 
    <div className="card-container">
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/buck.jpg")}></img>
        <p>{animalArray.Buck}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/cat.jpg")}></img>
        <p>{animalArray.Cat}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/chameleon.jpg")}></img>
        <p>{animalArray.Chameleon}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/dog.jpg")}></img>
        <p>{animalArray.Dog}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/duck.jpg")}></img>
        <p>{animalArray.Duck}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/fox.jpg")}></img>
        <p>{animalArray.Fox}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/giraffe.jpg")}></img>
        <p>{animalArray.Giraffe}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/horse.jpg")}></img>
        <p>{animalArray.Horse}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/parrot.jpg")}></img>
        <p>{animalArray.Parrot}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/squid.jpg")}></img>
        <p>{animalArray.Squid}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/squirrel.jpg")}></img>
        <p>{animalArray.Squirrel}</p>
      </div>
      <div className="card" onClick={handleClick}>
        <img alt="img" src={require("./img/tiger.jpg")}></img>
        <p>{animalArray.Tiger}</p>
      </div>
    </div> 
    )
}
export default CardBuilder;