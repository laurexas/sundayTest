import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseOnCard: false };
    this.updateCardState = this.updateCardState.bind(this);
  }

  updateCardState() {
    this.setState({ mouseOnCard: this.state.mouseOnCard === true ? false : true });
  }

  render() {
    return (
      <div
        onMouseEnter={this.updateCardState}
        onMouseLeave={this.updateCardState}
        className={`Card ${this.state.mouseOnCard ? "Active" : ""}`}
      />
    );
  }
}
