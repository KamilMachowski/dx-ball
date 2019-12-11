import React from "react";

import "./Game.css";
import Board from "./Board";
import Paddle from "./Paddle";

class Game extends React.Component {

  render() {
    return (
      <div className="game" >
        <Board />
        <Paddle />
      </div>
    );
  }
}

// ========================================

export default Game;
