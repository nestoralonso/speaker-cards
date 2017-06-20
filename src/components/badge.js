import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

class Badge extends React.Component {
  render() {
    var word = this.props.word;
    var wordElement = <h1 key={word}>{word}</h1>;
    const style = {
      backgroundImage: `url(${this.props.image})`
    };

    return (
      <div className="badge" style={style}>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {wordElement}
        </CSSTransitionGroup>
      </div>
    );
  }
}
export default Badge;
