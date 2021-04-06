function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'classnames';
import { path as d3Path } from 'd3-path';
import { getX, getY, getSource, getTarget } from '../../../util/accessors';
export function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);
    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var path = d3Path();
    path.moveTo(sr * sc, sr * ss);
    path.lineTo(tr * tc, tr * ts);
    return path.toString();
  };
}
export default function LinkRadialLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? getX : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? getY : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? getSource : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? getTarget : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutPropertiesLoose(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  var pathGen = path || pathRadialLine({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return /*#__PURE__*/React.createElement(React.Fragment, null, children({
    path: pathGen
  }));
  return /*#__PURE__*/React.createElement("path", _extends({
    ref: innerRef,
    className: cx('visx-link visx-link-radial-line', className),
    d: pathGen(data) || ''
  }, restProps));
}