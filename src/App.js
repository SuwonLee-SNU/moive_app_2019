import React from 'react';

function Food( {name,picture} ) {
  return (
  <div>
    <h6>I love {name}!!!!!!!</h6>
    <img src={picture}/>
  </div>
  )
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://images.unsplash.com/photo-1487769723072-0e6602799af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Samgiopsal",
    image: "https://images.unsplash.com/photo-1559602580-78f1ba809b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];

function App() {
    return <div>
      <h1>
        Hello
      </h1>
      {foodILike.map(dish=>(
      <Food 
        name={dish.name} 
        picture={dish.image}
      />
      ))}
    </div>;
}

export default App;
