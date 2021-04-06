function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import BaseBarStack from './private/BaseBarStack';
import AnimatedBars from './private/AnimatedBars';
export default function AnimatedBarStack(props) {
  return /*#__PURE__*/React.createElement(BaseBarStack, _extends({}, props, {
    BarsComponent: AnimatedBars
  }));
}