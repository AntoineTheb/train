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
  function _class(ctx, width, height, color) {
    _classCallCheck(this, _class);

    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = color;
    this.nblayers = (0, _utils.getRandomInt)(2, 11);

    ctx.clearRect(0, 0, width, height);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      for (var i = this.nblayers; i > 0; --i) {

        this.ctx.fillStyle = 'hsl(' + this.color + ', ' + i * 10 + '%, ' + i * 10 + '%)';
        var mL = new _MountainLine2.default(this.ctx, this.height - (i * (this.height / this.nblayers) - this.nblayers / 10), this.width);
        mL.render();
      }
    }
  }]);

  return _class;
}();

exports.default = _class;