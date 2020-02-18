import React from 'react';
import Proptypes from "prop-types";
//import Zeroshome from "./Zeroshome";
//import logo from './logo.svg';
//import './App.css';



const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta-1200x1200.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/440px-Samgyeopsal-gui.jpg",
    rating: 4.3
  },
]



function Food({name, picture, rating}){
  //console.log(props.fav);
  return (<div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
}


function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

export default App;
