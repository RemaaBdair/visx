"use strict";

exports.__esModule = true;
exports.default = isDiscreteScale;

/* eslint-disable @typescript-eslint/no-explicit-any */
function isDiscreteScale(scaleConfig) {
  return (scaleConfig == null ? void 0 : scaleConfig.type) === 'band' || (scaleConfig == null ? void 0 : scaleConfig.type) === 'ordinal' || (scaleConfig == null ? void 0 : scaleConfig.type) === 'point';
}