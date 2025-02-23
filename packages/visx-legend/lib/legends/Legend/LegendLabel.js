"use strict";

exports.__esModule = true;
exports.default = LegendLabel;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LegendLabel(_ref) {
  var _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '1' : _ref$flex,
      label = _ref.label,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '5px 0' : _ref$margin,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["flex", "label", "margin", "align", "children"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "visx-legend-label",
    style: {
      justifyContent: align,
      display: 'flex',
      flex: flex,
      margin: margin
    }
  }, restProps), children || label);
}

LegendLabel.propTypes = {
  align: _propTypes.default.string,
  label: _propTypes.default.node,
  flex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  margin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  children: _propTypes.default.node
};