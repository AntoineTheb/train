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
  function _class(ctx, width, height, color, isNight) {
    _classCallCheck(this, _class);

    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = color;
    this.isNight = isNight;

    this.nbLayers = (0, _utils.getRandomInt)(2, 11);
    this.sky = this.height - (0, _utils.getRandomInt)(-50, this.height / 2);
    ctx.clearRect(0, 0, width, height);
  }

  _createClass(_class, [{
    key: 'drawSky',
    value: function drawSky() {
      if (this.isNight) {
        this.ctx.fillStyle = 'hsl(' + this.color + ', 10%, 10%)';
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fill();

        // draw stars
        this.ctx.fillStyle = '#eee';
        for (var i = 0; i < 1000; ++i) {
          this.ctx.fillRect((0, _utils.getRandomInt)(0, this.width), (0, _utils.getRandomInt)(0, this.height), 1, 1);
        }
      } else {
        this.ctx.fillStyle = 'hsl(' + this.color + ', 30%, 90%)';
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fill();
      }
    }
  }, {
    key: 'drawMountains',
    value: function drawMountains() {
      for (var i = this.nbLayers; i > 0; --i) {
        // TODO: + mod for night
        this.ctx.fillStyle = 'hsl(' + this.color + ', ' + i * 10 + '%, ' + (i + 1) * 10 + '%)';
        var mountainLine = new _MountainLine2.default(this.ctx, this.height - (i * (this.sky / this.nbLayers) - this.nbLayers / 10), this.width);
        mountainLine.render();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.drawSky();
      this.drawMountains();
    }
  }]);

  return _class;
}();

exports.default = _class;