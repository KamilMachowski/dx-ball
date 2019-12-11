import React from "react";

import "./Game.css";
import Board from "./Board";
import data from "./lvl/1";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: data
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board blocks={this.state.blocks}/>
        </div>
      </div>
    );
  }
}

// ========================================

export default Game;
