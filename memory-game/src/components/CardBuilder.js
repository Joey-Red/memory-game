import React, {useEffect} from "react";
import "./style.css"

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
  //   const randomizeCards = () => {
  //   };
    
      
  //   // document.addEventListener("click", Scoreboard)
  // })
  // let afunc = () => {
  //   for (i in animalArray){
  //     console.log(i + "test?")
  //   }
  // }
  // afunc()
  console.log(animalArray)
  console.log(animalArray)
  return ( 
    <div className="card-container">
      <div className="card">
        <img alt="img" src={require("./img/buck.jpg")}></img>
        <p>{animalArray.Buck}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/cat.jpg")}></img>
        <p>{animalArray.Cat}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/chameleon.jpg")}></img>
        <p>{animalArray.Chameleon}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/dog.jpg")}></img>
        <p>{animalArray.Dog}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/duck.jpg")}></img>
        <p>{animalArray.Duck}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/fox.jpg")}></img>
        <p>{animalArray.Fox}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/giraffe.jpg")}></img>
        <p>{animalArray.Giraffe}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/horse.jpg")}></img>
        <p>{animalArray.Horse}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/parrot.jpg")}></img>
        <p>{animalArray.Parrot}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/squid.jpg")}></img>
        <p>{animalArray.Squid}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/squirrel.jpg")}></img>
        <p>{animalArray.Squirrel}</p>
      </div>
      <div className="card">
        <img alt="img" src={require("./img/tiger.jpg")}></img>
        <p>{animalArray.Tiger}</p>
      </div>
    </div> 
    )
}
export default CardBuilder;