import React, { Component } from 'react';
import IntroCard from './components/intro-card';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="speakers">
            <IntroCard name="Jessie 1" />
            <IntroCard name="Person 2" />
            <IntroCard name="Person 2" />
            <IntroCard name="Person 2" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
