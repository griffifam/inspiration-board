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
      cards: [],
      error: "",
    }
  }

  componentDidMount() {
    const url = this.props.url + this.props.boardName + '/cards';

    console.log("Sending request to", url);

    axios.get(url)
    .then((response) => {
      console.log(response);
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      });
    })
  }

  render() {
    console.log(this.props.boardName);
    console.log(this.state.cards);
    // console.log(this.state.cards[0].text);

    // <Card text={this.state.cards[0].text} emoji={this.state.cards[4].emoji} />
    const cardComponents = this.state.cards.map((card, index) => {
      console.log("One card:", card);
      return (
        <Card
          key={index}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          />
      );
    })

    return (
      <div>
        <div>Board of Inspiration</div>
        <div>
          <h4>{this.props.boardName}</h4>
        </div>
        There are {this.state.cards.length} cards
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
