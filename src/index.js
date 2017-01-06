import Background from './Background';
import Bridge from './Bridge';
import Train from './Train';
import { getRandomInt } from './utils';

const bgCanvas = document.getElementById('tutoriel1');
const bgCtx = bgCanvas.getContext('2d');
const fgCanvas = document.getElementById('tutoriel2');
const fgCtx = fgCanvas.getContext('2d');

const width = Math.max(bgCanvas.width, fgCanvas.width);
const height = Math.max(bgCanvas.height, fgCanvas.height);

function draw() {
  const x = 0;
  const color = getRandomInt(0, 360);
  // if mountains are blue-ish to purple-ish, it is night
  const isNight = color < 300 && color > 200;
  
  const bg = new Background(bgCtx, width, height, color, isNight);
  const bridge = new Bridge(bgCtx, height / 10, width, height);
  const train = new Train(fgCtx, height, width, x, height / 10, draw);

  bg.render();
  bridge.render();
  window.requestAnimationFrame(train.render.bind(train));
}

draw();

