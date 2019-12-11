import React from "react";
//import "./Board.css";

function Block(props) {
  return <button id={props.key} className="block">{props.value}</button>;
}

class Paddle extends React.Component {
  renderBlock(k) {
    return (
      <Block
        value={this.props.blocks[k]}
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
    return this.renderBoard();
  }
}

export default Paddle;
