'use strict';

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

var _Bridge = require('./Bridge');

var _Bridge2 = _interopRequireDefault(_Bridge);

var _Train = require('./Train');

var _Train2 = _interopRequireDefault(_Train);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bgCanvas = document.getElementById('tutoriel1');
var bgCtx = bgCanvas.getContext('2d');
var fgCanvas = document.getElementById('tutoriel2');
var fgCtx = fgCanvas.getContext('2d');

var width = Math.max(bgCanvas.width, fgCanvas.width);
var height = Math.max(bgCanvas.height, fgCanvas.height);

function draw() {
  var x = 0;
  var color = (0, _utils.getRandomInt)(0, 360);

  var bg = new _Background2.default(bgCtx, width, height, color);
  var bridge = new _Bridge2.default(bgCtx, height / 10, width, height);
  var train = new _Train2.default(fgCtx, height, width, x, height / 10, draw);

  bg.render();
  bridge.render();
  window.requestAnimationFrame(train.render.bind(train));
}

draw();