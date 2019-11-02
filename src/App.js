import React from 'react';
import PropTypes from "prop-types";

function Food( {name,picture,rating} ) {
  return (
  <div>
    <h6>I love {name}!!!!!!!</h6>
    <h4> {rating}/5.0 </h4>
    <img src={picture}/>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://images.unsplash.com/photo-1487769723072-0e6602799af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    rating: 3
  },
  {
    id:2,
    name: "Samgiopsal",
    image: "https://images.unsplash.com/photo-1559602580-78f1ba809b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 5
  }
];

function App() {
    return <div>
      {foodILike.map(dish=>(
      <Food key={dish.id}
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}
      />
      ))}
    </div>;
}

export default App;
