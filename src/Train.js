export default class {

  constructor(ctx, height, width, x, bridgeHeight, callback) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.x = x;
    this.callback = callback;
    // add wagons and light if night
    this.trainWidth = 30;
    this.trainHeight = 10;
    this.ctx.fillStyle = 'black';

    this.y = height - bridgeHeight - this.trainHeight;
  }

  render() {
    this.ctx.clearRect(this.x, this.trainWidth, this.width, this.height);
    this.ctx.beginPath();
    this.ctx.rect(++this.x, this.y, this.trainWidth, this.trainHeight);
    this.ctx.fill();
    if (this.x > this.width) this.callback();
    else window.requestAnimationFrame(this.render.bind(this));
  }

}
