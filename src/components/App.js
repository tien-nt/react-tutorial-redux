import React, { Component } from 'react';
import './App.css';
import FoodContainer from '../containers/food-list';
import FoodDetailContainer from '../containers/food-detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React wih Redux project</h1>
        </header>
        <p className="App-intro">
          <p>This is a tutorial React app with redux</p>
        </p>
        <h2>List os foods: </h2>
        <FoodContainer/>
        <hr/>
        <h2>food details:</h2>
        <FoodDetailContainer/>
      </div>
    );
  }
}

export default App;
