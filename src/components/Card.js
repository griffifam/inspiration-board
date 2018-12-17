import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const emoji = require("emoji-dictionary");

    return (
      <div className="card">
        <section>{this.props.text}</section>
        <section>{emoji.getUnicode(this.props.emoji)}</section>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

Card.defaultProps = {
  text: 'no email on file',
  emoji: 'no emoji on file',
};

export default Card;
