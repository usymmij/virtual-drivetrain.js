import React from 'react';

export default class Bot {
    constructor(state) {
        this.angle = 0;
        this.x = state.screen.width * state.screen.ratio / 2;
        this.y = state.screen.height * state.screen.ratio / 2;
    }

    render(context) {
        context.save();

        //setup colour and width
        context.strokeStyle = '#ffffff';
        context.fillStyle = '#ff00aa';
        context.lineWidth = 2;

        //setup draw location
        context.translate(this.x, this.y);
        context.rotate(this.angle * Math.PI / 180);

        //draw square
        context.beginPath();
        context.lineJoin = "round";
        context.moveTo(15, 15);
        context.lineTo(15, -15);
        context.lineTo(-15, -15);
        context.lineTo(-15, 15);
        context.lineTo(15, 15);
        context.closePath();

        //fill and stroke
        context.fill();
        context.stroke();

        //new colour
        context.fillStyle = '#6600ff';

        //draw triangle
        context.beginPath();
        context.lineJoin = "round";
        context.moveTo(-10, 10);
        context.lineTo(0, -8);
        context.lineTo(10, 10);
        context.closePath();

        //fill and stroke
        context.fill();
        context.stroke();

        context.restore();
    }
}