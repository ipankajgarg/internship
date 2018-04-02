import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { connect } from "react-redux";
import Arrows from "./common/Arrows";

import { getCards, postCards } from "../actions";

class MainScreen extends Component {
  state = { text: true, content: "" };
  componentWillMount() {
    console.log("mount");

    this.props.getCards();
  }
  changeState = () => {
    this.setState({ text: false });
  };
  generateColor = () => {
    var letters = "ABCDE".split("");
    var color = "#";
    for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.postCards({
      title: "Internship stuff",
      content: this.state.content,
      color: this.generateColor()
    });

    this.setState({ content: "", text: true });
  };
  addOptions = () => {
    if (this.state.text) {
      return (
        <img onClick={() => this.changeState()} src="../../images/plus.png" />
      );
    }
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
          type="text"
          placeholder=" write content"
        />
      </form>
    );
  };

  renderList = () => {
    console.log("array", this.props.cards);
    return this.props.cards.map(card => {
      return (
        <li
          style={{ borderColor: card.color, backgroundColor: card.color }}
          key={card.id}
        >
          <span>{card.title}</span>
          <p>{card.content}</p>
        </li>
      );
    });
  };

  render() {
    console.log("cards", this.props.cards);
    return (
      <div id="content">
        <div className="container">
          <div className="screen-list">
            <ul>
              {this.renderList()}
              <li key={95} style={{ border: "none" }}>
                {this.addOptions()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.Cards.list
  };
}
export default connect(mapStateToProps, { getCards, postCards })(MainScreen);
