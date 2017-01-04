import { getRandomInt } from './utils';

export default class {

  _arch(ctx, startX, bridgeHeight, archWidth, height) {
    ctx.lineTo(startX, height);
    ctx.bezierCurveTo(
      startX,
      height - bridgeHeight,
      startX + archWidth,
      height - bridgeHeight,
      startX + archWidth,
      height);
  }

  constructor(ctx, bridgeHeight, width, height) {
    this.ctx = ctx;
    this.bridgeHeight = bridgeHeight;
    this.width = width;
    this.height = height;
  }
  
  render() {
    let x = getRandomInt(0, 10) % 2 === 0 ?
      getRandomInt(0, 10) :
      getRandomInt(0, 50) * -1;
    const archWidth = this.bridgeHeight * 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height - this.bridgeHeight);
    this.ctx.lineTo(0, this.height);
    while (x < this.width) {
      this._arch(this.ctx, x, this.bridgeHeight, archWidth, this.height);
      x += archWidth + 10;
    }
    this.ctx.lineTo(this.width, this.height - this.bridgeHeight);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fillStyle = '#fff';
    this.ctx.fill();
  }

}
