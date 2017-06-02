import React, { Component } from 'react';
import IntroCard from './components/intro-card';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        { name: 'Sarah Drasner', github: 'https://github.com/sdras', twitter: 'https://twitter.com/sarah_edo' },
        { name: 'Ricardo Cabello', github: 'https://github.com/mrdoob', twitter: 'https://twitter.com/mrdoob' },
        { name: 'Ada Rose Edwards', github: 'https://github.com/adaroseedwards', twitter: 'https://twitter.com/Lady_Ada_King' },
        { name: 'Jorge Galvis', github: 'https://github.com/jorlugaqui', twitter: 'https://twitter.com/jorlugaqui' },
        { name: 'Jessie Frazelle', github: 'https://github.com/jessfraz', twitter: 'https://twitter.com/jessfraz' },
        { name: 'Gillermo Rausch', github: 'https://github.com/rauchg', twitter: 'https://twitter.com/rauchg' },
        { name: 'Michael Jackson', github: 'https://github.com/mjackson', twitter: 'https://twitter.com/mjackson' },
      ]
    }
  }

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
