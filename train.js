'use strict';

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

var _Bridge = require('./Bridge');

var _Bridge2 = _interopRequireDefault(_Bridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var width = 1000;
var height = 400;
var x = void 0;
var bgCanvas = document.getElementById('tutoriel1');
var bgCtx = bgCanvas.getContext('2d');
var fgCanvas = document.getElementById('tutoriel2');
var fgCtx = fgCanvas.getContext('2d');

function train() {
  var y = height - height / 10 - 10;
  fgCtx.clearRect(0, 0, width, height);
  fgCtx.beginPath();
  fgCtx.rect(x, y, 30, 10);
  fgCtx.fillStyle = 'black';
  fgCtx.fill();
  ++x;
  if (x > width) draw();else window.requestAnimationFrame(train);
}

function draw() {
  x = 0;
  var bg = new _Background2.default(bgCtx, width, height);
  bg.render();
  var bridge = new _Bridge2.default(bgCtx, height / 10, width, height);
  bridge.render();

  window.requestAnimationFrame(train);
}

draw();