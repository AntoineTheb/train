import Background from './Background';
import Bridge from './Bridge';
import Train from './Train';

const bgCanvas = document.getElementById('tutoriel1');
const bgCtx = bgCanvas.getContext('2d');
const fgCanvas = document.getElementById('tutoriel2');
const fgCtx = fgCanvas.getContext('2d');

const width = Math.max(bgCanvas.width, fgCanvas.width);
const height = Math.max(bgCanvas.height, fgCanvas.height);

function draw() {
  const x = 0;
  const bg = new Background(bgCtx, width, height);
  const bridge = new Bridge(bgCtx, height / 10, width, height);
  const train = new Train(fgCtx, height, width, x, height / 10, draw);
  
  bg.render();
  bridge.render();
  window.requestAnimationFrame(train.render.bind(train));
}

draw();

