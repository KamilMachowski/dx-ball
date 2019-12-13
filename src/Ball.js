import React from "react";
//import "./Board.css";
//import windowWidth from "react-window-size";

class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 50, // at start binded to paddle
      y: 50
    };
    this.ballMoveX = this.ballMoveX.bind(this);
    this.ballMoveY = this.ballMoveY.bind(this);
  }
  // onMouseMove(e) {
  //   this.setState({ x: e.nativeEvent.offsetX });
  // }

  //testing move right to left
  //let length = this.state.length;
  ballMoveX(x) {
    if (x < 10) x = 10;
    if (x > 88) x = 88; // check if not behind range 90-2
    let toRight = true;
    if (x < 88 && toRight === true) x++;
    else toRight = false;
    if (x > 10 && toRight === false) x--;
    else toRight = true;
    return x;
  }
  ballMoveY(y) {
    if (y < 8) y = 8; // && position >=xPaddle <=xPaddle+paddleLength

    if (y > 96) y = 96;
    let toUp = true;
    //for (;;) {
    if (y < 96 && toUp === true) y++;
    else toUp = false;
    if (y > 8 && toUp === false) y--;
    else toUp = true;
    return y;
  }
  gameOver(y) {
    if (y < 4) return true;
  }
  render() {
    let x = (this.state.x * 100) / 1920 - 1; // in viewport width %
    let y = (this.state.y * 100) / 840 - 1;
    let gameOver = false;
    gameOver = this.gameOver(y);
    if (gameOver) alert("przed łailem");
    //while (!gameOver) {
    for (var i = 0; i < 100; i++) {
      x = this.ballMoveX(x);
      y = this.ballMoveY(y);
      console.log(`Ball possiton(x,y) : (${x},${y}) `);
    }
    if (gameOver) alert("za łailem");
    //this.setState({x: x});
    //}
    return (
      <div className="game-ball">
        <button className="ball" style={{ left: `${x}vw`, bottom: `${y}vh` }}>
          {/* Ball position: {x} */}
        </button>
      </div>
    );
  }
}

export default Ball;
