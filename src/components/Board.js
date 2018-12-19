import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: CARD_DATA.cards,
    }
  }

  render() {
    console.log(this.props.boardName);
    console.log(this.state.cards);
    console.log(this.state.cards[0].text);
    return (
      <div>
        <div>Board of Inspiration</div>
        <div>
          <h4>{this.props.boardName}</h4>
        </div>
        <Card text={this.state.cards[0].text} emoji={this.state.cards[4].emoji} />
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
