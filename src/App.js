import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import { boardMaker } from './boardMaker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: boardMaker(10),
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Minesweeper</h1>
        </header>
        <p className="App-intro">
        Click on a square to get started
        </p>
        <Board dimension={10} />
      </div>
    );
  }
}

export default App;
