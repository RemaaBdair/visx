import _pt from "prop-types";
import React from 'react';
import { Group } from '@visx/group';
export default function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var cleanWidth = typeof width === 'string' || typeof width === 'undefined' ? 0 : width;
  var cleanHeight = typeof height === 'string' || typeof height === 'undefined' ? 0 : height;
  var size = Math.max(cleanWidth, cleanHeight);
  var radius = size / 2;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement(Group, {
    top: radius,
    left: radius
  }, /*#__PURE__*/React.createElement("circle", {
    r: radius,
    fill: fill,
    style: style
  })));
}
ShapeCircle.propTypes = {
  fill: _pt.string,
  width: _pt.oneOfType([_pt.string, _pt.number]),
  height: _pt.oneOfType([_pt.string, _pt.number])
};