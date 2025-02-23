"use strict";

exports.__esModule = true;
exports.default = Quantile;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Legend = _interopRequireDefault(require("./Legend"));

var _identity = _interopRequireDefault(require("../util/identity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function labelFormatterFactoryFactory(_ref) {
  var labelDelimiter = _ref.labelDelimiter;
  return function (_ref2) {
    var scale = _ref2.scale,
        labelFormat = _ref2.labelFormat;
    return function (datum, index) {
      var _scale$invertExtent = scale.invertExtent(scale(datum)),
          x0 = _scale$invertExtent[0],
          x1 = _scale$invertExtent[1];

      return {
        extent: [x0, x1],
        text: labelFormat(x0, index) + " " + labelDelimiter + " " + labelFormat(x1, index),
        value: scale(x0),
        datum: datum,
        index: index
      };
    };
  };
}
/** A Quantile scale takes a number input and returns an Output. */


function Quantile(_ref3) {
  var inputDomain = _ref3.domain,
      scale = _ref3.scale,
      _ref3$labelFormat = _ref3.labelFormat,
      labelFormat = _ref3$labelFormat === void 0 ? _identity.default : _ref3$labelFormat,
      inputLabelTransform = _ref3.labelTransform,
      _ref3$labelDelimiter = _ref3.labelDelimiter,
      labelDelimiter = _ref3$labelDelimiter === void 0 ? '-' : _ref3$labelDelimiter,
      restProps = _objectWithoutPropertiesLoose(_ref3, ["domain", "scale", "labelFormat", "labelTransform", "labelDelimiter"]);

  // transform range into input values because it may contain more elements
  var domain = inputDomain || scale.range().map(function (output) {
    return scale.invertExtent(output)[0];
  });
  var labelTransform = inputLabelTransform || labelFormatterFactoryFactory({
    labelDelimiter: labelDelimiter
  });
  return /*#__PURE__*/_react.default.createElement(_Legend.default, _extends({
    scale: scale,
    domain: domain,
    labelFormat: labelFormat,
    labelTransform: labelTransform
  }, restProps));
}

Quantile.propTypes = {
  labelDelimiter: _propTypes.default.string
};