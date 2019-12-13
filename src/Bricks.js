import React from "react";
import data from "./lvl/1";
import { Rect } from "react-konva";

class Bricks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lvl: data
    };
  }

  // renderBlock(k) {
  //   return <Brick key={k} />;
  // }
  // renderRow(i) {
  //   var row = [];
  //   for (var j = 0; j < 20; j++) {
  //     row.push(this.renderBlock(i * 20 + j));
  //   }
  //   return row;
  // }
  // renderBoard() {
  //   var board = [];
  //   for (var i = 0; i < 16; i++) {
  //     board.push(this.renderRow(i));
  //   }
  //   return board;
  // }
  brick(x, y, width, height, fill) {
    console.log(x, y, width, height, fill);
    return (<Rect x={x} y={y} width={width} height={height} fill={fill} />);
  }
  brickColor(colorCode) {
    switch (colorCode) {
      case "1":
        return "white";
      case "2":
        return "yellow";
      default:
        return "green";
    }
  }
  renderBricks() {
    console.log('2');
    var brickWidth = this.props.width / 20;
    var brickHeight = brickWidth / 2;
    var bricks='';
    // generate bricks
    for (var iy = 0; iy < 16; iy++) {
      for (var ix = 0; ix < 20; ix++) {
        var x = ix * brickWidth;
        var y = iy * brickHeight;
        var width = brickWidth - 1;
        var height = brickHeight - 1;
        var fill = this.brickColor(this.state.lvl[ix + iy]);

        bricks += this.brick(x, y, width, height, fill);
      }
    }
    return bricks;
  }

  render() {
    // return <div className="game-board">{this.renderBoard()}</div>;
    console.log('1');
    return (this.renderBricks());
    //return <Rect x={x} y={y} width={width} height={height} fill={fill} />;
  }
}

export default Bricks;
