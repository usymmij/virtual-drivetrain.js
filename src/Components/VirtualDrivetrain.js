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
  constructor(props) {
    super(props);
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
    this.lastCalculationTime = Date.now();
  }

  componentDidMount() {
    let context = this.refs.canvas.getContext("2d");
    this.setState({ context: context });
    this.bot = new Bot(this.state);
    this.bot.render(context);

    requestAnimationFrame(() => {
      this.update();
    });
  }

  update() {
    const context = this.state.context;

    /**
     * update positions
     */
    this.lastCalculationTime = Date.now();
    this.bot.moveUp();

    /**
     * Render
     */

    //clear canvas
    context.save();
    context.scale(this.state.screen.ratio, this.state.screen.ratio);
    context.fillStyle = '#1f004d';
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.restore();
    
    this.bot.render(context);

    this.setState({ context: context });

    requestAnimationFrame(() => {
        this.update();
    });
  }
  

  render() {
    return (
      <div className="VirtualDrivetrain">
        <header> 
        </header>
        <canvas
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
      </div>
    );
  }
}
