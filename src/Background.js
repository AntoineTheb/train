import { getRandomInt } from './utils';
import MountainLine from './MountainLine';
export default class {

  constructor(ctx, width, height, color, isNight) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = color;
    this.isNight = isNight;

    this.nbLayers = getRandomInt(2, 11);
    this.sky = this.height - getRandomInt(-50, this.height / 2); 
    ctx.clearRect(0, 0, width, height);
  }

  drawSky() {
    if (this.isNight) {
      this.ctx.fillStyle = `hsl(${this.color}, 10%, 10%)`;
      this.ctx.rect(0, 0, this.width, this.height);
      this.ctx.fill();

      // draw stars
      this.ctx.fillStyle = '#eee';
      for (let i = 0; i < 1000; ++i) {
        this.ctx.fillRect(
          getRandomInt(0, this.width),
          getRandomInt(0, this.height),
          1,1);
      }
    } else {
      this.ctx.fillStyle = `hsl(${this.color}, 30%, 90%)`;
      this.ctx.rect(0, 0, this.width, this.height);
      this.ctx.fill();
    }
  }

  drawMountains() {
    for (let i = this.nbLayers; i > 0; --i) {
      // TODO: + mod for night
      this.ctx.fillStyle = `hsl(${this.color}, ${i * 10}%, ${(i+1) * 10}%)`;
      const mountainLine = new MountainLine(
        this.ctx,
        this.height - (i * (this.sky / this.nbLayers) - (this.nbLayers / 10)),
        this.width
      );
      mountainLine.render();
    }
  }

  render() {
    this.drawSky();
    this.drawMountains();
  }

}
