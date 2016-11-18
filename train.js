'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var width = 1000;
var height = 400;
var x = 0;
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

var MountainLine = function () {
  _createClass(MountainLine, [{
    key: '_drawSlope',
    value: function _drawSlope(ctx, x, y) {
      ctx.lineTo(x, y);
      return {
        x: getRandomInt(x, x + 5),
        y: getRandomInt(y + 6, y - 5)
      };
    }
  }]);

  function MountainLine(ctx, startheight, width) {
    _classCallCheck(this, MountainLine);

    this.ctx = ctx;
    this.startheight = startheight;
    this.width = width;
  }

  _createClass(MountainLine, [{
    key: 'render',
    value: function render() {
      var x = 0;
      var y = this.startheight;
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      while (x < this.width) {
        var ret = this._drawSlope(this.ctx, x, y);
        x = ret.x;
        y = ret.y;
      }
      this.ctx.lineTo(x, this.width);
      this.ctx.lineTo(0, this.width);
      this.ctx.lineTo(0, this.startheight);
      this.ctx.fill();
    }
  }]);

  return MountainLine;
}();

var Background = function () {
  function Background(ctx, width, height) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.nblayers = getRandomInt(1, 11);

    ctx.clearRect(0, 0, width, height);
  }

  _createClass(Background, [{
    key: 'render',
    value: function render() {
      for (var i = this.nblayers; i > 0; --i) {
        this.ctx.fillStyle = 'hsl(0, 0%, ' + i * 10 + '%)';
        var mL = new MountainLine(this.ctx, this.height - (i * (this.height / this.nblayers) - this.nblayers / 10), this.width);
        mL.render();
      }
    }
  }]);

  return Background;
}();

function bridge(ctx, bridgeHeight) {
  var x = getRandomInt(0, 10) % 2 === 0 ? getRandomInt(0, 10) : getRandomInt(0, 50) * -1;
  var archWidth = bridgeHeight * 1.5;
  ctx.beginPath();
  ctx.moveTo(0, height - bridgeHeight);
  ctx.lineTo(0, height);
  while (x < width) {
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
  var bg = new Background(bgCtx, width, height);
  bg.render();
  bridge(bgCtx, height / 10);

  window.requestAnimationFrame(train);
}

draw();