import React from "react";
import data from "./lvl/1";
//import "./Board.css";

function Block(props) {
  return (
    <button id={props.key} className="block">
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: data
    };
  }
  renderBlock(k) {
    return (
      <Block
        value={this.state.blocks[k]}
        key={k}
        // onClick={() => this.props.onClick(k)}
      />
    );
  }
  renderRow(i) {
    var row = [];
    for (var j = 0; j < 20; j++) {
      row.push(this.renderBlock(i * 20 + j));
    }
    return row;
  }
  renderBoard() {
    var board = [];
    for (var i = 0; i < 16; i++) {
      board.push(
        <div className="board-row">
          <div>{this.renderRow(i)}</div>
        </div>
      );
    }
    return board;
  }

  render() {
    return (<div className="game-board">{this.renderBoard()}</div>);
  }
}

export default Board;
