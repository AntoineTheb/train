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