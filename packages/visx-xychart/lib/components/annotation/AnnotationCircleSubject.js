"use strict";

exports.__esModule = true;
exports.default = AnnotationCircleSubject;

var _react = _interopRequireWildcard(require("react"));

var _annotation = require("@visx/annotation");

var _DataContext = _interopRequireDefault(require("../../context/DataContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** AnnotationSubjectCircle which provides color from theme. */
function AnnotationCircleSubject(props) {
  var _useContext = (0, _react.useContext)(_DataContext.default),
      theme = _useContext.theme;

  return /*#__PURE__*/_react.default.createElement(_annotation.CircleSubject, _extends({
    stroke: theme == null ? void 0 : theme.axisStyles.x.bottom.axisLine.stroke
  }, props));
}