const width = 1000;
const height = 400;
let x = 0;
const bgCanvas = document.getElementById('tutoriel1');
const bgCtx = bgCanvas.getContext('2d');
const fgCanvas = document.getElementById('tutoriel2');
const fgCtx = fgCanvas.getContext('2d');

function train() {
  const y = height - (height / 10) - 10;
  fgCtx.clearRect(0, 0, width, height);
  fgCtx.beginPath();
  fgCtx.rect(x, y, 30, 10);
  fgCtx.fillStyle = 'black';
  fgCtx.fill();
  ++x;
  if (x > width) draw();
  else window.requestAnimationFrame(train);
}

const MountainLine = class {

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

const Background = class {

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

function bridge(ctx, bridgeHeight) {
  let x = getRandomInt(0, 10) % 2 === 0 ? getRandomInt(0, 10) : getRandomInt(0, 50) * -1;
  const archWidth = bridgeHeight * 1.5;
  ctx.beginPath();
  ctx.moveTo(0, height - bridgeHeight);
  ctx.lineTo(0, height);
  while ( x < width) {
    arch(ctx, x, bridgeHeight, archWidth);
    x += archWidth + 10;
  }
  ctx.lineTo(width, height - bridgeHeight);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.fill();
}

function arch(ctx, startX, bridgeHeight, archWidth) {
  ctx.lineTo(startX, height);
  ctx.bezierCurveTo(startX, height - bridgeHeight, startX + archWidth, height - bridgeHeight, startX + archWidth, height);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function draw() {
  x = 0;
  const bg = new Background(bgCtx, width, height);
  bg.render();
  bridge(bgCtx, height / 10);

  window.requestAnimationFrame(train);
}

draw();

