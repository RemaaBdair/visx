"use strict";

exports.__esModule = true;
exports.default = EventEmitterProvider;

var _react = _interopRequireWildcard(require("react"));

var _mitt = _interopRequireDefault(require("mitt"));

var _EventEmitterContext = _interopRequireDefault(require("../context/EventEmitterContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** Provider for EventEmitterContext. */
function EventEmitterProvider(_ref) {
  var children = _ref.children;
  var emitter = (0, _react.useMemo)(function () {
    return (0, _mitt.default)();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_EventEmitterContext.default.Provider, {
    value: emitter
  }, children);
}