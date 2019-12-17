import React from "react";
import { Circle, Layer } from "react-konva";
import Konva from "konva";
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
  ballMoveX(x, direction) {
    if (x < 10) x = 10;
    if (x > 88) x = 88; // check if not behind range 90-2
    //let toRight = true;
    if (x < 88 && direction[0] === true) x++;
    else direction[0] = false;
    if (x > 10 && direction[0] === false) x--;
    else direction[0] = true;
    return x;
  }
  ballMoveY(y, direction) {
    if (y < 8) y = 8; // && position >=xPaddle <=xPaddle+paddleLength

    if (y > 96) y = 96;
    //let toUp = true;
    //for (;;) {
    if (y < 96 && direction[1] === true) y++;
    else direction[1] = false;
    if (y > 8 && direction[1] === false) y--;
    else direction[1] = true;
    return y;
  }
  isOverBrick(x, y) {
    var col = Konva.getImageData(x, y, 1, 1); 
    
    col.data[3] ? true : false; //if transparency is not 0 the brick exist
  }
  colision(x, y, direction) {
    if (this.isOverBrick(x + 5, y) || this.isOverBrick(x - 5, y)) {
      direction[0] = !direction[0];
    }
    if (this.isOverBrick(x, y + 5) || this.isOverBrick(x, y - 5)) {
      direction[1] = !direction[1];
    }
    //todo - find that bick and make it fully transparent [r,g,b,0]
    return direction;
  }
  gameOver(y) {
    if (y < 4) return true;
  }
  render() {
    let x = (this.state.x * 100) / 1920 - 1; // in viewport width %
    let y = (this.state.y * 100) / 840 - 1;
    let ball = "";
    let gameOver = false;
    let direction = [true, true]; //[true, true] - right up, [false,true] - left up, [true, false] - right down [false, false] - left down
    gameOver = this.gameOver(y);
    if (gameOver) alert("przed łailem");
    //while (!gameOver) {
    for (var i = 0; i < 100; i++) {
      x = this.ballMoveX(x, direction);
      y = this.ballMoveY(y, direction);
      console.log(`Ball possiton(x,y) : (${x},${y}) `);
      ball = (
        <Circle
          x={0}
          y={0}
          radius={5}
          fill="white"
          stroke="black"
          strokeWidth={1}
        />
      );
    }
    if (gameOver) alert("za łailem");
    //this.setState({x: x});
    //}
    // return (
    //   <div className="game-ball">
    //     <button className="ball" style={{ left: `${x}vw`, bottom: `${y}vh` }}>
    //       {/* Ball position: {x} */}
    //     </button>
    //   </div>
    // );
    return ball;
  }
}

export default Ball;
