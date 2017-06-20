import React from "react";

import Badge from "./badge";
import Icon from "./icon";

import "./intro-card.css";

class IntroCard extends React.Component {
  static defaultProps = {
    baseWord: ""
  };

  componentWillMount() {
    this.setState({ word: this.props.baseWord });
    this.timeout = null;
  }

  onMouseOver(word) {
    clearTimeout(this.timeout);
    this.setState({ word: word });
  }

  onMouseOut() {
    // Don't leave, if they enter a different active state quickly.
    this.timeout = setTimeout(
      function() {
        this.setState({ word: this.props.baseWord });
      }.bind(this),
      10
    );
  }

  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <Badge word={this.state.word} image={user.picture} />
        <h1>{user.name}</h1>
        <div className="bottom-icons">
          <Icon
            name="github"
            url={user.github}
            onMouseOverEvent={this.onMouseOver.bind(this)}
            onMouseOutEvent={this.onMouseOut.bind(this)}
          />
          <Icon
            name="twitter"
            url={user.twitter}
            onMouseOverEvent={this.onMouseOver.bind(this)}
            onMouseOutEvent={this.onMouseOut.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default IntroCard;
