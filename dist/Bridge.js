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