import React from 'react';
import StarWarsGrid from './components/StarWarsGrid';



import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">A long time ago in a galaxy far, far away....React Wars</h1>
      <StarWarsGrid/>
    </div>
  );
}

export default App;
