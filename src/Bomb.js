// your Bomb code here!
import React from "react";

export default class Bomb extends React.Component {
  state = {
    secondsLeft: this.props.initialCount,
  };
  render() {
    return this.state.secondsLeft !== 0 ? (
      <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    ) 
      <div>Boom!</div>
    );
  }
}
