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
      boardName: this.props.boardName,
      cards: CARD_DATA.cards,
    };
  }


  render() {
    const allCards = this.state.cards;
    console.log(allCards[0]);
    const cardComponents = allCards.map((card, index) => {
      <Card key={index} text={card.text ? card.text : ""} emoji={card.emoji ? card.emoji : ""} />
    });

    return (
      <div>
        <p>Board of Inspiration</p>
        <p>{this.state.boardName}</p>
        <Card text={this.state.cards[2].text} emoji={this.state.cards[4].emoji} />
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
