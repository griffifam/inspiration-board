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
      // cards: CARD_DATA.cards,
      cards: [],
      error: "",
      myBoard: this.props.url + `${this.props.boardName}/cards`,
    };
  }
  const URL = `${this.props.url + this.props.boardName}/cards`
  console.log(URL);

  componentDidMount(){
    axios.get(this.state.myBoard)
    .then((response)=>{
      console.log(`printing out some data ${response.data}`);
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    const allCards = this.state.cards;
    console.log(`check it out now ${allCards[0]}`);
    const cardComponents = allCards.map((card, i) => {
      return <Card key={i} id={card.id} text={card.text} emoji={card.emoji} />
    });

    return (
      <div>
        <div>Board of Inspiration</div>
        <div>
          <h4>{this.state.boardName}</h4>
        </div>
        <div>{cardComponents}</div>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
