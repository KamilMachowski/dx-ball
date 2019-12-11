import React from "react";
//import "./Board.css";
//import windowWidth from "react-window-size";

class Paddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 10, // in viewport width %
      x: 0
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX });
  }
  render() {


    let length = this.state.length;
    let x = this.state.x*100/1920 - length/2; // in viewport width %
    if (x<10) x=10;
    if (x>90-length) x=90-length; // check if not behind range
    

    return (
      <div className="game-paddle full" onMouseMove={this.onMouseMove}>
        <button className="paddle" style={{ left: `${x}vw`,   width: `${length}vw` }}>
          {/* Mouse position: {x} */}
        </button>
      </div>
    );
  }
}

export default Paddle;
