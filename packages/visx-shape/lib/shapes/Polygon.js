"use strict";

exports.__esModule = true;
exports.default = Polygon;
exports.getPoints = exports.getPoint = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _trigonometry = require("../util/trigonometry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULT_CENTER = {
  x: 0,
  y: 0
};

var getPoint = function getPoint(_ref) {
  var sides = _ref.sides,
      size = _ref.size,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? DEFAULT_CENTER : _ref$center,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,
      side = _ref.side;
  var degrees = 360 / sides * side - rotate;
  var radians = (0, _trigonometry.degreesToRadians)(degrees);
  return {
    x: center.x + size * Math.cos(radians),
    y: center.y + size * Math.sin(radians)
  };
};

exports.getPoint = getPoint;

var getPoints = function getPoints(_ref2) {
  var sides = _ref2.sides,
      size = _ref2.size,
      center = _ref2.center,
      rotate = _ref2.rotate;
  return new Array(sides).fill(0).map(function (_, side) {
    return getPoint({
      sides: sides,
      size: size,
      center: center,
      rotate: rotate,
      side: side
    });
  });
};

exports.getPoints = getPoints;

function Polygon(_ref3) {
  var sides = _ref3.sides,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 25 : _ref3$size,
      _ref3$center = _ref3.center,
      center = _ref3$center === void 0 ? DEFAULT_CENTER : _ref3$center,
      _ref3$rotate = _ref3.rotate,
      rotate = _ref3$rotate === void 0 ? 0 : _ref3$rotate,
      className = _ref3.className,
      children = _ref3.children,
      innerRef = _ref3.innerRef,
      restProps = _objectWithoutPropertiesLoose(_ref3, ["sides", "size", "center", "rotate", "className", "children", "innerRef"]);

  var points = getPoints({
    sides: sides,
    size: size,
    center: center,
    rotate: rotate
  }).map(function (_ref4) {
    var x = _ref4.x,
        y = _ref4.y;
    return [x, y];
  }); // eslint-disable-next-line react/jsx-no-useless-fragment

  if (children) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children({
    points: points
  }));
  return /*#__PURE__*/_react.default.createElement("polygon", _extends({
    ref: innerRef,
    className: (0, _classnames.default)('visx-polygon', className),
    points: points.join(' ')
  }, restProps));
}