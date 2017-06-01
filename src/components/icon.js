import React from 'react';

class Icon extends React.Component {

  onMouseOver = (event) => {
		this.props.onMouseOverEvent(this.props.name);
  }

  onMouseOut = (event) => {
		this.props.onMouseOutEvent(event);
  }

  render() {
    return (
      <a href="/" onClick={this.props.onClick} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut}>
        <svg className="icon icon-bubble icon-larger">
          <use xlinkHref={ '#' + this.props.name }></use>
        </svg>
      </a>
    )
  }

};

export default Icon;

