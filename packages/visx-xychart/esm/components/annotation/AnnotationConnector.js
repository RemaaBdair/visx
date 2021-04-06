function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { Connector as BaseConnector } from '@visx/annotation';
import DataContext from '../../context/DataContext';

/** AnnotationConnector which provides color from theme. */
export default function AnnotationConnector(props) {
  var _useContext = useContext(DataContext),
      theme = _useContext.theme;

  return /*#__PURE__*/React.createElement(BaseConnector, _extends({
    stroke: theme == null ? void 0 : theme.axisStyles.x.bottom.axisLine.stroke
  }, props));
}