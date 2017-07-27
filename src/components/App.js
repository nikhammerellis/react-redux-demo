import React, { Component } from 'react';
import './App.css';
import Restaurant from './Restaurant/Restaurant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Demo Restaurant Settings with Image Upload in Modal</h1>
        <hr />
        <br />
        <Restaurant />
      </div>
    );
  }
}

export default App;
