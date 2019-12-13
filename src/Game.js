import React from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";
import Bricks from "./Bricks";
import Paddle from "./Paddle";
import Ball from "./Ball";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 600
    };
  }
  render() {
    //    layer.draw();
    return (
      <div className="game container">
        <Stage width={this.state.width} height={this.state.height}>
          <Layer>
            <Bricks width={this.state.width} />
            {/* <Paddle />
            <Ball /> */}
          </Layer>
        </Stage>
      </div>
    );
  }
}

// ========================================

export default Game;
