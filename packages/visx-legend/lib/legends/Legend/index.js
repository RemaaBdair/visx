"use strict";

exports.__esModule = true;
exports.default = Legend;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LegendItem = _interopRequireDefault(require("./LegendItem"));

var _LegendLabel = _interopRequireDefault(require("./LegendLabel"));

var _LegendShape = _interopRequireDefault(require("./LegendShape"));

var _valueOrIdentity = _interopRequireWildcard(require("../../util/valueOrIdentity"));

var _labelTransformFactory = _interopRequireDefault(require("../../util/labelTransformFactory"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultStyle = {
  display: 'flex'
};

function Legend(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? defaultStyle : _ref$style,
      scale = _ref.scale,
      shape = _ref.shape,
      inputDomain = _ref.domain,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? _valueOrIdentity.valueOrIdentityString : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? _valueOrIdentity.valueOrIdentityString : _ref$size,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? _valueOrIdentity.default : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? _labelTransformFactory.default : _ref$labelTransform,
      _ref$shapeWidth = _ref.shapeWidth,
      shapeWidth = _ref$shapeWidth === void 0 ? 15 : _ref$shapeWidth,
      _ref$shapeHeight = _ref.shapeHeight,
      shapeHeight = _ref$shapeHeight === void 0 ? 15 : _ref$shapeHeight,
      _ref$shapeMargin = _ref.shapeMargin,
      shapeMargin = _ref$shapeMargin === void 0 ? '2px 4px 2px 0' : _ref$shapeMargin,
      shapeStyle = _ref.shapeStyle,
      _ref$labelAlign = _ref.labelAlign,
      labelAlign = _ref$labelAlign === void 0 ? 'left' : _ref$labelAlign,
      _ref$labelFlex = _ref.labelFlex,
      labelFlex = _ref$labelFlex === void 0 ? '1' : _ref$labelFlex,
      _ref$labelMargin = _ref.labelMargin,
      labelMargin = _ref$labelMargin === void 0 ? '0 4px' : _ref$labelMargin,
      _ref$itemMargin = _ref.itemMargin,
      itemMargin = _ref$itemMargin === void 0 ? '0' : _ref$itemMargin,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$itemDirection = _ref.itemDirection,
      itemDirection = _ref$itemDirection === void 0 ? 'row' : _ref$itemDirection,
      legendLabelProps = _ref.legendLabelProps,
      children = _ref.children,
      legendItemProps = _objectWithoutPropertiesLoose(_ref, ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"]);

  // `Scale extends ScaleType` constraint is tricky
  //  could consider removing `scale` altogether in the future and making `domain: Datum[]` required
  // @ts-ignore doesn't like `.domain()`
  var domain = inputDomain || ('domain' in scale ? scale.domain() : []);
  var labelFormatter = labelTransform({
    scale: scale,
    labelFormat: labelFormat
  });
  var labels = domain.map(labelFormatter); // eslint-disable-next-line react/jsx-no-useless-fragment

  if (children) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children(labels));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('visx-legend', className),
    style: _extends({}, style, {
      flexDirection: direction
    })
  }, labels.map(function (label, i) {
    return /*#__PURE__*/_react.default.createElement(_LegendItem.default, _extends({
      key: "legend-" + label.text + "-" + i,
      margin: itemMargin,
      flexDirection: itemDirection
    }, legendItemProps), /*#__PURE__*/_react.default.createElement(_LegendShape.default, {
      shape: shape,
      height: shapeHeight,
      width: shapeWidth,
      margin: shapeMargin,
      item: domain[i],
      itemIndex: i,
      label: label,
      fill: fill,
      size: size,
      shapeStyle: shapeStyle
    }), /*#__PURE__*/_react.default.createElement(_LegendLabel.default, _extends({
      label: label.text,
      flex: labelFlex,
      margin: labelMargin,
      align: labelAlign
    }, legendLabelProps)));
  }));
}

Legend.propTypes = {
  children: _propTypes.default.func,
  className: _propTypes.default.string,
  domain: _propTypes.default.array,
  shapeWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  shapeHeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  shapeMargin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  labelAlign: _propTypes.default.string,
  labelFlex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  labelMargin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  itemMargin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  fill: _propTypes.default.func,
  size: _propTypes.default.func,
  shapeStyle: _propTypes.default.func
};