import React from "react";
//import "./Board.css";

function Block(props) {
  return <button className="block">{props.value}</button>;
}

class Board extends React.Component {
  renderBlock(k) {
    return (
      <Block
        value={this.props.blocks[k]}
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
    for (var i = 0; i < 20; i++) {
      board.push(
        <div className="board-row">
          <div>{this.renderRow(i)}</div>
        </div>
      );
    }
    return board;
  }

  render() {
    return this.renderBoard();
  }
}

export default Board;
