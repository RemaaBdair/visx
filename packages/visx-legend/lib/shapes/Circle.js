"use strict";

exports.__esModule = true;
exports.default = ShapeCircle;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _group = require("@visx/group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var cleanWidth = typeof width === 'string' || typeof width === 'undefined' ? 0 : width;
  var cleanHeight = typeof height === 'string' || typeof height === 'undefined' ? 0 : height;
  var size = Math.max(cleanWidth, cleanHeight);
  var radius = size / 2;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size
  }, /*#__PURE__*/_react.default.createElement(_group.Group, {
    top: radius,
    left: radius
  }, /*#__PURE__*/_react.default.createElement("circle", {
    r: radius,
    fill: fill,
    style: style
  })));
}

ShapeCircle.propTypes = {
  fill: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};