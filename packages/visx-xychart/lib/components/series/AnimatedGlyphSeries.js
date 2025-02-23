"use strict";

exports.__esModule = true;
exports.default = AnimatedGlyphSeries;

var _react = _interopRequireWildcard(require("react"));

var _AnimatedGlyphs = _interopRequireDefault(require("./private/AnimatedGlyphs"));

var _BaseGlyphSeries = _interopRequireDefault(require("./private/BaseGlyphSeries"));

var _defaultRenderGlyph = _interopRequireDefault(require("./private/defaultRenderGlyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AnimatedGlyphSeries(_ref) {
  var _ref$renderGlyph = _ref.renderGlyph,
      renderGlyph = _ref$renderGlyph === void 0 ? _defaultRenderGlyph.default : _ref$renderGlyph,
      props = _objectWithoutPropertiesLoose(_ref, ["renderGlyph"]);

  var renderGlyphs = (0, _react.useCallback)(function (glyphsProps) {
    return /*#__PURE__*/_react.default.createElement(_AnimatedGlyphs.default, _extends({}, glyphsProps, {
      renderGlyph: renderGlyph
    }));
  }, [renderGlyph]);
  return /*#__PURE__*/_react.default.createElement(_BaseGlyphSeries.default, _extends({}, props, {
    // @TODO currently generics for non-SeriesProps are not passed correctly in
    // withRegisteredData HOC
    // @ts-ignore
    renderGlyphs: renderGlyphs
  }));
}