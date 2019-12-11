import React from 'react';
// import logo from './logo.svg';
import './Game.css';
import Board from './Board';




class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ blocks: Array(9).fill(null) }],
      stepNumber: 0,
      isXNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const blocks = current.blocks.slice();
    if (calculateWinner(blocks) || blocks[i]) return;
    blocks[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ blocks: blocks }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.blocks);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move ${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) status = `Winner: ${winner}`;
    else status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    return (
      <div className="game">
        <div className="game-board">
          <Board blocks={current.blocks} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(blocks) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
      return blocks[a];
    }
  }
  return null;
}
// ========================================

export default Game;
