"use strict";

exports.__esModule = true;
exports.default = BarGroupComponent;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _group = require("@visx/group");

var _Bar = _interopRequireDefault(require("./Bar"));

var _getBandwidth = _interopRequireDefault(require("../util/getBandwidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Generates bar groups as an array of objects and renders `<rect />`s for each datum grouped by `key`. A general setup might look like this:
 *
 * ```js
 * const data = [{
 *  date: date1,
 *  key1: value,
 *  key2: value,
 *  key3: value
 * }, {
 *  date: date2,
 *  key1: value,
 *  key2: value,
 *  key3: value,
 * }];
 *
 * const x0 = d => d.date;
 * const keys = [key1, key2, key3];
 *
 * const x0Scale = scaleBand({
 *  domain: data.map(x0),
 *  padding: 0.2
 * });
 * const x1Scale = scaleBand({
 *  domain: keys,
 *  padding: 0.1
 * });
 * const yScale = scaleLinear({
 *   domain: [0, Math.max(...data.map(d => Math.max(...keys.map(key => d[key]))))]
 * });
 * const color = scaleOrdinal({
 *   domain: keys,
 *   range: [blue, green, purple]
 * });
 * ```
 *
 * Example: [https://airbnb.io/visx/bargroup](https://airbnb.io/visx/bargroup)
 */
function BarGroupComponent(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      color = _ref.color,
      keys = _ref.keys,
      height = _ref.height,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"]);

  var barWidth = (0, _getBandwidth.default)(x1Scale);
  var barGroups = data.map(function (group, i) {
    return {
      index: i,
      x0: x0Scale(x0(group)),
      bars: keys.map(function (key, j) {
        var value = group[key];
        return {
          index: j,
          key: key,
          value: value,
          width: barWidth,
          x: x1Scale(key) || 0,
          y: yScale(value) || 0,
          color: color(key, j),
          height: height - (yScale(value) || 0)
        };
      })
    };
  }); // eslint-disable-next-line react/jsx-no-useless-fragment

  if (children) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children(barGroups));
  return /*#__PURE__*/_react.default.createElement(_group.Group, {
    className: (0, _classnames.default)('visx-bar-group', className),
    top: top,
    left: left
  }, barGroups.map(function (barGroup) {
    return /*#__PURE__*/_react.default.createElement(_group.Group, {
      key: "bar-group-" + barGroup.index + "-" + barGroup.x0,
      left: barGroup.x0
    }, barGroup.bars.map(function (bar) {
      return /*#__PURE__*/_react.default.createElement(_Bar.default, _extends({
        key: "bar-group-bar-" + barGroup.index + "-" + bar.index + "-" + bar.value + "-" + bar.key,
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        fill: bar.color
      }, restProps));
    }));
  }));
}