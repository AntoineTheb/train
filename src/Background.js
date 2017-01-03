import { getRandomInt } from './utils';
import MountainLine from './MountainLine';
export default class {

  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.nblayers = getRandomInt(1, 11);

    ctx.clearRect(0, 0, width, height);
  }

  render() {
    for (let i = this.nblayers; i > 0; --i) {
      this.ctx.fillStyle = `hsl(0, 0%, ${i * 10}%)`;
      const mL = new MountainLine(
        this.ctx,
        this.height - (i * (this.height / this.nblayers) - (this.nblayers / 10)),
        this.width
      );
      mL.render();
    }
  }

};
