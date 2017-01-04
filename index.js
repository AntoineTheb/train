(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _MountainLine = require('./MountainLine');

var _MountainLine2 = _interopRequireDefault(_MountainLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(ctx, width, height) {
    _classCallCheck(this, _class);

    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.nblayers = (0, _utils.getRandomInt)(2, 11);

    ctx.clearRect(0, 0, width, height);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      for (var i = this.nblayers; i > 0; --i) {
        this.ctx.fillStyle = 'hsl(0, 0%, ' + i * 10 + '%)';
        var mL = new _MountainLine2.default(this.ctx, this.height - (i * (this.height / this.nblayers) - this.nblayers / 10), this.width);
        mL.render();
      }
    }
  }]);

  return _class;
}();

exports.default = _class;
},{"./MountainLine":3,"./utils":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  _createClass(_class, [{
    key: '_arch',
    value: function _arch(ctx, startX, bridgeHeight, archWidth, height) {
      ctx.lineTo(startX, height);
      ctx.bezierCurveTo(startX, height - bridgeHeight, startX + archWidth, height - bridgeHeight, startX + archWidth, height);
    }
  }]);

  function _class(ctx, bridgeHeight, width, height) {
    _classCallCheck(this, _class);

    this.ctx = ctx;
    this.bridgeHeight = bridgeHeight;
    this.width = width;
    this.height = height;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var x = (0, _utils.getRandomInt)(0, 10) % 2 === 0 ? (0, _utils.getRandomInt)(0, 10) : (0, _utils.getRandomInt)(0, 50) * -1;
      var archWidth = this.bridgeHeight * 1.5;
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.height - this.bridgeHeight);
      this.ctx.lineTo(0, this.height);
      while (x < this.width) {
        this._arch(this.ctx, x, this.bridgeHeight, archWidth, this.height);
        x += archWidth + 10;
      }
      this.ctx.lineTo(this.width, this.height - this.bridgeHeight);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fillStyle = '#fff';
      this.ctx.fill();
    }
  }]);

  return _class;
}();

exports.default = _class;
},{"./utils":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  _createClass(_class, [{
    key: '_drawSlope',
    value: function _drawSlope(ctx, x, y) {
      ctx.lineTo(x, y);
      return {
        x: (0, _utils.getRandomInt)(x, x + 5),
        y: (0, _utils.getRandomInt)(y + 6, y - 5)
      };
    }
  }]);

  function _class(ctx, startheight, width) {
    _classCallCheck(this, _class);

    this.ctx = ctx;
    this.startheight = startheight;
    this.width = width;
  }

  _createClass(_class, [{
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

  return _class;
}();

exports.default = _class;
},{"./utils":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(ctx, height, width, x, bridgeHeight, callback) {
    _classCallCheck(this, _class);

    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.x = x;
    this.callback = callback;

    this.trainWidth = 30;
    this.trainHeight = 10;
    this.ctx.fillStyle = 'black';

    this.y = height - bridgeHeight - this.trainHeight;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      this.ctx.clearRect(this.x, this.trainWidth, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.rect(++this.x, this.y, this.trainWidth, this.trainHeight);
      this.ctx.fill();
      if (this.x > this.width) this.callback();else window.requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return _class;
}();

exports.default = _class;
},{}],5:[function(require,module,exports){
'use strict';

var _Background = require('./Background');

var _Background2 = _interopRequireDefault(_Background);

var _Bridge = require('./Bridge');

var _Bridge2 = _interopRequireDefault(_Bridge);

var _Train = require('./Train');

var _Train2 = _interopRequireDefault(_Train);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bgCanvas = document.getElementById('tutoriel1');
var bgCtx = bgCanvas.getContext('2d');
var fgCanvas = document.getElementById('tutoriel2');
var fgCtx = fgCanvas.getContext('2d');

var width = Math.max(bgCanvas.width, fgCanvas.width);
var height = Math.max(bgCanvas.height, fgCanvas.height);

function draw() {
  var x = 0;
  var bg = new _Background2.default(bgCtx, width, height);
  var bridge = new _Bridge2.default(bgCtx, height / 10, width, height);
  var train = new _Train2.default(fgCtx, height, width, x, height / 10, draw);

  bg.render();
  bridge.render();
  window.requestAnimationFrame(train.render.bind(train));
}

draw();
},{"./Background":1,"./Bridge":2,"./Train":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomInt = getRandomInt;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
},{}]},{},[5]);
