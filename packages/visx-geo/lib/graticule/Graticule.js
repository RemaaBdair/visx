"use strict";

exports.__esModule = true;
exports.default = Graticule;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _group = require("@visx/group");

var _d3Geo = require("d3-geo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Graticule(_ref) {
  var graticule = _ref.graticule,
      lines = _ref.lines,
      outline = _ref.outline,
      extent = _ref.extent,
      extentMajor = _ref.extentMajor,
      extentMinor = _ref.extentMinor,
      step = _ref.step,
      stepMajor = _ref.stepMajor,
      stepMinor = _ref.stepMinor,
      precision = _ref.precision,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["graticule", "lines", "outline", "extent", "extentMajor", "extentMinor", "step", "stepMajor", "stepMinor", "precision", "children"]);

  var currGraticule = (0, _d3Geo.geoGraticule)();
  if (extent) currGraticule.extent(extent);
  if (extentMajor) currGraticule.extentMajor(extentMajor);
  if (extentMinor) currGraticule.extentMinor(extentMinor);
  if (step) currGraticule.step(step);
  if (stepMajor) currGraticule.stepMajor(stepMajor);
  if (stepMinor) currGraticule.stepMinor(stepMinor);
  if (precision) currGraticule.precision(precision);
  if (children) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children({
    graticule: currGraticule
  }));
  return /*#__PURE__*/_react.default.createElement(_group.Group, {
    className: "visx-geo-graticule"
  }, graticule && /*#__PURE__*/_react.default.createElement("path", _extends({
    d: graticule(currGraticule()),
    fill: "none",
    stroke: "black"
  }, restProps)), lines && currGraticule.lines().map(function (line, i) {
    return /*#__PURE__*/_react.default.createElement("g", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("path", _extends({
      d: lines(line),
      fill: "none",
      stroke: "black"
    }, restProps)));
  }), outline && /*#__PURE__*/_react.default.createElement("path", _extends({
    d: outline(currGraticule.outline()),
    fill: "none",
    stroke: "black"
  }, restProps)));
}

Graticule.propTypes = {
  graticule: _propTypes.default.func,
  lines: _propTypes.default.func,
  outline: _propTypes.default.func,
  children: _propTypes.default.func,
  precision: _propTypes.default.number
};