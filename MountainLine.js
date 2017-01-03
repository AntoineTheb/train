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
;