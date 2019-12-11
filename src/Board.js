import React from "react";
//import "./Board.css";

function Block(props) {
  return (
    <button className="block">
      {props.value}
    </button>
  );
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
    for (var j = 0; j < 20; j++) {
      return this.renderBlock(i * 20 + j);
    }
  }
  renderBoard() {
    for (var i = 0; i < 20; i++) {
      return (
        <div className="board-row">
          <div>{this.renderRow(i)}</div>
        </div>
      );
    }
  }

  render() {
    return this.renderBoard();
  }
}

export default Board;
