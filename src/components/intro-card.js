import React from 'react';

import Badge from './badge';
import Icon from './icon';

import './intro-card.css';


class IntroCard extends React.Component {
  static defaultProps = {
    baseWord: 'Hello'
  };

  componentWillMount() {
    this.setState({word: this.props.baseWord});
    this.timeout = null;
  }

  onMouseOver(word) {
     clearTimeout(this.timeout);
     this.setState({word: word});
  }

  onMouseOut() {

    // Don't leave, if they enter a different active state quickly.
    this.timeout = setTimeout(function() {
      this.setState({word: this.props.baseWord});
    }.bind(this), 10);
  }

  onClick = (event) => {
    event.preventDefault();
    console.log('Has been clicked');
  }

  render() {
    return (
      <div className="card">
        <Badge word={this.state.word} />
        <h1>{this.props.name}</h1>
        <p>
          <Icon name="github" onClick={this.onClick} onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
          <Icon name="codePen" onClick={this.onClick} onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
          <Icon name="twitter" onClick={this.onClick} onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        </p>
      </div>)
  }

};

export default IntroCard;