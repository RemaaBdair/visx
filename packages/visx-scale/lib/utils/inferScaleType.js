"use strict";

exports.__esModule = true;
exports.default = inferScaleType;

var _isUtcScale = _interopRequireDefault(require("./isUtcScale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inferScaleType(scale) {
  // Try a sequence of typeguards to figure out the scale type
  if ('paddingInner' in scale) {
    return 'band';
  }

  if ('padding' in scale) {
    return 'point';
  }

  if ('quantiles' in scale) {
    return 'quantile';
  }

  if ('base' in scale) {
    return 'log';
  }

  if ('exponent' in scale) {
    return scale.exponent() === 0.5 ? 'sqrt' : 'pow';
  }

  if ('constant' in scale) {
    return 'symlog';
  }

  if ('clamp' in scale) {
    // Linear, Time or Utc scales
    if (scale.ticks()[0] instanceof Date) {
      return (0, _isUtcScale.default)(scale) ? 'utc' : 'time';
    }

    return 'linear';
  }

  if ('nice' in scale) {
    return 'quantize';
  }

  if ('invertExtent' in scale) {
    return 'threshold';
  }

  return 'ordinal';
}