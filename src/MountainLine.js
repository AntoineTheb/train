import { getRandomInt } from './utils';

export default class {

  _drawSlope(ctx, x, y) {
    ctx.lineTo(x, y);
    return {
      x: getRandomInt(x, x + 5),
      y: getRandomInt(y + 6, y - 5)
    };
  }

  constructor(ctx, startheight, width) {
    this.ctx = ctx;
    this.startheight = startheight;
    this.width = width;
  }

  render() {
    let x = 0;
    let y = this.startheight;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    while(x < this.width) {
      const ret = this._drawSlope(this.ctx, x, y);
      x = ret.x;
      y = ret.y;
    }
    this.ctx.lineTo(x, this.width);
    this.ctx.lineTo(0, this.width);
    this.ctx.lineTo(0, this.startheight);
    this.ctx.fill();
  }

};

