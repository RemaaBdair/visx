"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _accessors = require("@visx/shape/lib/util/accessors");

var _getBandwidth = _interopRequireDefault(require("@visx/shape/lib/util/getBandwidth"));

var _DataContext = _interopRequireDefault(require("../../../context/DataContext"));

var _isValidNumber = _interopRequireDefault(require("../../../typeguards/isValidNumber"));

var _combineBarStackData = require("../../../utils/combineBarStackData");

var _constants = require("../../../constants");

var _useSeriesEvents = _interopRequireDefault(require("../../../hooks/useSeriesEvents"));

var _findNearestStackDatum = _interopRequireDefault(require("../../../utils/findNearestStackDatum"));

var _useStackedData2 = _interopRequireDefault(require("../../../hooks/useStackedData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function BaseBarStack(_ref) {
  var children = _ref.children,
      order = _ref.order,
      offset = _ref.offset,
      BarsComponent = _ref.BarsComponent,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onPointerMove = _ref.onPointerMove,
      onPointerOut = _ref.onPointerOut,
      onPointerUp = _ref.onPointerUp,
      _ref$enableEvents = _ref.enableEvents,
      enableEvents = _ref$enableEvents === void 0 ? true : _ref$enableEvents;

  var _ref2 = (0, _react.useContext)(_DataContext.default),
      colorScale = _ref2.colorScale,
      dataRegistry = _ref2.dataRegistry,
      horizontal = _ref2.horizontal,
      xScale = _ref2.xScale,
      yScale = _ref2.yScale;

  var _useStackedData = (0, _useStackedData2.default)({
    children: children,
    order: order,
    offset: offset
  }),
      seriesChildren = _useStackedData.seriesChildren,
      dataKeys = _useStackedData.dataKeys,
      stackedData = _useStackedData.stackedData; // custom logic to find the nearest AreaStackDatum (context) and return the original Datum (props)


  var findNearestDatum = (0, _react.useCallback)(function (params) {
    var _seriesChildren$find, _seriesChildren$find$;

    var childData = (_seriesChildren$find = seriesChildren.find(function (child) {
      return child.props.dataKey === params.dataKey;
    })) == null ? void 0 : (_seriesChildren$find$ = _seriesChildren$find.props) == null ? void 0 : _seriesChildren$find$.data;
    return childData ? (0, _findNearestStackDatum.default)(params, childData, horizontal) : null;
  }, [seriesChildren, horizontal]);
  var ownEventSourceKey = _constants.BARSTACK_EVENT_SOURCE + "-" + dataKeys.join('-');
  var eventEmitters = (0, _useSeriesEvents.default)({
    dataKey: dataKeys,
    enableEvents: enableEvents,
    // @ts-ignore Datum input + return type are expected to be the same type but they differ for BarStack (registry data is StackedDatum, return type is user Datum)
    findNearestDatum: findNearestDatum,
    onBlur: onBlur,
    onFocus: onFocus,
    onPointerMove: onPointerMove,
    onPointerOut: onPointerOut,
    onPointerUp: onPointerUp,
    source: ownEventSourceKey,
    allowedSources: [_constants.XYCHART_EVENT_SOURCE, ownEventSourceKey]
  }); // if scales and data are not available in the registry, bail

  if (dataKeys.some(function (key) {
    return dataRegistry.get(key) == null;
  }) || !xScale || !yScale || !colorScale) {
    return null;
  }

  var barThickness = (0, _getBandwidth.default)(horizontal ? yScale : xScale);
  var halfBarThickness = barThickness / 2;
  var getWidth;
  var getHeight;
  var getX;
  var getY;

  if (horizontal) {
    getWidth = function getWidth(bar) {
      var _xScale, _xScale2;

      return ((_xScale = xScale((0, _accessors.getSecondItem)(bar))) != null ? _xScale : NaN) - ((_xScale2 = xScale((0, _accessors.getFirstItem)(bar))) != null ? _xScale2 : NaN);
    };

    getHeight = function getHeight() {
      return barThickness;
    };

    getX = function getX(bar) {
      return xScale((0, _accessors.getFirstItem)(bar));
    };

    getY = function getY(bar) {
      var _yScale;

      return 'bandwidth' in yScale ? yScale((0, _combineBarStackData.getStackValue)(bar.data)) : Math.max(((_yScale = yScale((0, _combineBarStackData.getStackValue)(bar.data))) != null ? _yScale : NaN) - halfBarThickness);
    };
  } else {
    getWidth = function getWidth() {
      return barThickness;
    };

    getHeight = function getHeight(bar) {
      var _yScale2, _yScale3;

      return ((_yScale2 = yScale((0, _accessors.getFirstItem)(bar))) != null ? _yScale2 : NaN) - ((_yScale3 = yScale((0, _accessors.getSecondItem)(bar))) != null ? _yScale3 : NaN);
    };

    getX = function getX(bar) {
      var _xScale3;

      return 'bandwidth' in xScale ? xScale((0, _combineBarStackData.getStackValue)(bar.data)) : Math.max(((_xScale3 = xScale((0, _combineBarStackData.getStackValue)(bar.data))) != null ? _xScale3 : NaN) - halfBarThickness);
    };

    getY = function getY(bar) {
      return yScale((0, _accessors.getSecondItem)(bar));
    };
  }

  var bars = stackedData.flatMap(function (barStack, stackIndex) {
    var _barSeries$props;

    var entry = dataRegistry.get(barStack.key);
    if (!entry) return null; // get colorAccessor from child BarSeries, if available

    var barSeries = seriesChildren.find(function (child) {
      return child.props.dataKey === barStack.key;
    });
    var colorAccessor = barSeries == null ? void 0 : (_barSeries$props = barSeries.props) == null ? void 0 : _barSeries$props.colorAccessor;
    return barStack.map(function (bar, index) {
      var _barSeries$props2;

      var barX = getX(bar);
      if (!(0, _isValidNumber.default)(barX)) return null;
      var barY = getY(bar);
      if (!(0, _isValidNumber.default)(barY)) return null;
      var barWidth = getWidth(bar);
      if (!(0, _isValidNumber.default)(barWidth)) return null;
      var barHeight = getHeight(bar);
      if (!(0, _isValidNumber.default)(barHeight)) return null;
      var barSeriesDatum = colorAccessor ? barSeries == null ? void 0 : (_barSeries$props2 = barSeries.props) == null ? void 0 : _barSeries$props2.data[index] : null;
      return {
        key: stackIndex + "-" + barStack.key + "-" + index,
        x: barX,
        y: barY,
        width: barWidth,
        height: barHeight,
        fill: barSeriesDatum && colorAccessor ? colorAccessor(barSeriesDatum, index) : colorScale(barStack.key)
      };
    });
  }).filter(function (bar) {
    return bar;
  });
  return /*#__PURE__*/_react.default.createElement("g", {
    className: "visx-bar-stack"
  }, /*#__PURE__*/_react.default.createElement(BarsComponent, _extends({
    bars: bars,
    horizontal: horizontal,
    xScale: xScale,
    yScale: yScale
  }, eventEmitters)));
}

BaseBarStack.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]).isRequired
};
var _default = BaseBarStack;
exports.default = _default;