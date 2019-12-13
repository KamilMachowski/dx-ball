import React from "react";

import "./Game.css";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";

class Game extends React.Component {

  render() {
    return (
      <div className="game" >
        <Board />
        <Paddle />
        <Ball />
      </div>
    );
  }
}

// ========================================

export default Game;
