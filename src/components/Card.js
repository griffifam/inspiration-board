import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {

    const emoji = require("emoji-dictionary");

    return (
      <div className="card">
        <div>
          {this.props.text}
          <p>{emoji.getUnicode(this.props.emoji)}</p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text:PropTypes.string,
  emoji:PropTypes.string,
};

export default Card;
