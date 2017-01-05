import { getRandomInt } from './utils';
import MountainLine from './MountainLine';
export default class {

  constructor(ctx, width, height, color) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = color;
    this.nblayers = getRandomInt(2, 11);

    ctx.clearRect(0, 0, width, height);
  }

  render() {
    for (let i = this.nblayers; i > 0; --i) {

      this.ctx.fillStyle = `hsl(${this.color}, ${i * 10}%, ${i * 10}%)`;
      const mL = new MountainLine(
        this.ctx,
        this.height - (i * (this.height / this.nblayers) - (this.nblayers / 10)),
        this.width
      );
      mL.render();
    }
  }

}
