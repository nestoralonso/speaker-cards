import React, { Component } from 'react';
import IntroCard from './components/intro-card';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        {
          name: 'Sarah Drasner',
          github: 'https://github.com/sdras',
          picture: 'https://avatars2.githubusercontent.com/u/2281088?v=3',
          twitter: 'https://twitter.com/sarah_edo'
        },
        {
          name: 'Ricardo Cabello',
          github: 'https://github.com/mrdoob',
          picture: 'https://avatars3.githubusercontent.com/u/97088?v=3',
          twitter: 'https://twitter.com/mrdoob'
        },
        {
          name: 'Ada Rose Edwards',
          github: 'https://github.com/adaroseedwards',
          picture: 'https://avatars2.githubusercontent.com/u/4225330?v=3',
          twitter: 'https://twitter.com/Lady_Ada_King'
        },
        {
          name: 'Jorge Galvis',
          github: 'https://github.com/jorlugaqui',
          picture: 'https://avatars1.githubusercontent.com/u/189450?v=3',
          twitter: 'https://twitter.com/jorlugaqui'
        },
        {
          name: 'Jessie Frazelle',
          github: 'https://github.com/jessfraz',
          picture: 'https://avatars1.githubusercontent.com/u/1445228?v=3',
          twitter: 'https://twitter.com/jessfraz'
        },
        {
          name: 'Gillermo Rausch',
          github: 'https://github.com/rauchg',
          picture: 'https://avatars3.githubusercontent.com/u/13041?v=3',
          twitter: 'https://twitter.com/rauchg'
        },
        {
          name: 'Michael Jackson',
          github: 'https://github.com/mjackson',
          picture: 'https://avatars3.githubusercontent.com/u/92839?v=3',
          twitter: 'https://twitter.com/mjackson'
        },
      ]
    };
  }

  render() {
    const user = {
      name: 'Ryan Florence'
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="speakers">
            <IntroCard user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
