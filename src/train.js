import Background from './Background';
import Bridge from './Bridge';

const width = 1000;
const height = 400;
let x;
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

function draw() {
  x = 0;
  const bg = new Background(bgCtx, width, height);
  bg.render();
  const bridge = new Bridge(bgCtx, height / 10, width, height);
  bridge.render();

  window.requestAnimationFrame(train);
}

draw();

