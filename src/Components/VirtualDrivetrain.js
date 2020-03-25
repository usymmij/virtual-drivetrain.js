import React from "react";
import "./VirtualDrivetrain.css";
import Bot from "./Bot";

const MODE = {
  MENU: 0,
  INGAME: 1
};

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

export default class VirtualDrivetrain extends React.Component {
  constructor() {
    super();
    this.mode = MODE.MENU;
    this.bot = null;
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1
      },
      context: null
    };
    this.lastCalculation = Date.now();
  }

  componentDidMount() {
    let context = this.refs.canvas.getContext("2d");
    this.setState({ context: context });
    this.bot = new Bot(this.state);
    this.bot.render(this.state);

    requestAnimationFrame(() => {
      this.update();
    });
  }

  update() {
    this.lastCalculation = Date.now;
    //fucking run you piece of shit
  }

  render() {
    return (
      <div className="VirtualDrivetrain">
        <header></header>
        <canvas
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
      </div>
    );
  }
}
