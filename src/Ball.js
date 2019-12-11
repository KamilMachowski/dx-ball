import React from "react";
//import "./Board.css";
//import windowWidth from "react-window-size";

class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0, // at start binded to paddle
      y: 7
    };
    //this.onMouseMove = this.onMouseMove.bind(this);
  }
  // onMouseMove(e) {
  //   this.setState({ x: e.nativeEvent.offsetX });
  // }
  ballMove() {
    //testing move right to left
    //let length = this.state.length;
    let x = (this.state.x * 100) / 1920 - 1; // in viewport width %
    if (x < 10) x = 10;
    if (x > 88) x = 88; // check if not behind range 90-2
    toRight = true;
    for (;;) {
      if (x < 88 && toRight == true) x++;
      else toRight = false;

      if (x > 10 && toRight == false) x--;
      else toRight = true;
    }
  }

  render() {
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
