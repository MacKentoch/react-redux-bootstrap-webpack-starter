webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(30);
	
	var _reactTapEventPlugin = __webpack_require__(485);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _reactHotLoader = __webpack_require__(461);
	
	var _Root = __webpack_require__(513);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _Routes = __webpack_require__(533);
	
	var _Routes2 = _interopRequireDefault(_Routes);
	
	__webpack_require__(254);
	
	__webpack_require__(785);
	
	__webpack_require__(140);
	
	__webpack_require__(787);
	
	__webpack_require__(786);
	
	__webpack_require__(257);
	
	__webpack_require__(788);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ELEMENT_TO_BOOTSTRAP = 'root';
	var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
	
	(0, _reactTapEventPlugin2.default)();
	
	var renderApp = function renderApp(appRoutes) {
	  (0, _reactDom.render)(_react2.default.createElement(
	    _reactHotLoader.AppContainer,
	    null,
	    _react2.default.createElement(_Root2.default, { routes: appRoutes })
	  ), BootstrapedElement);
	};
	
	renderApp(_Routes2.default);
	
	if (false) {
	  module.hot.accept('./routes/Routes', function () {
	    var newRoutes = require('./routes/Routes').default;
	    renderApp(newRoutes);
	  });
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ELEMENT_TO_BOOTSTRAP, 'ELEMENT_TO_BOOTSTRAP', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/index.js');
	
	  __REACT_HOT_LOADER__.register(BootstrapedElement, 'BootstrapedElement', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/index.js');
	
	  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/index.js');
	}();

	;

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.enterHome = enterHome;
	exports.leaveHome = leaveHome;
	exports.enterComponents = enterComponents;
	exports.leaveComponents = leaveComponents;
	exports.enterAbout = enterAbout;
	exports.leaveAbout = leaveAbout;
	
	var _moment = __webpack_require__(3);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dateFormat = 'DD/MM/YYYY HH:mm';
	
	// /////////////////////
	// constants
	// /////////////////////
	var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
	var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
	var ENTER_COMPONENTS_VIEW = 'ENTER_COMPONENTS_VIEW';
	var LEAVE_COMPONENTS_VIEW = 'LEAVE_COMPONENTS_VIEW';
	var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
	var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';
	
	// /////////////////////
	// reducer
	// /////////////////////
	var initialState = {
	  currentView: 'not set',
	  enterTime: null,
	  leaveTime: null
	};
	
	var _default = function _default() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case ENTER_HOME_VIEW:
	    case ENTER_COMPONENTS_VIEW:
	    case ENTER_ABOUT_VIEW:
	      // can't enter if you are already inside
	      if (state.currentView !== action.currentView) {
	        return _extends({}, state, {
	          currentView: action.currentView,
	          enterTime: action.enterTime,
	          leaveTime: action.leaveTime
	        });
	      }
	      return state;
	
	    case LEAVE_HOME_VIEW:
	    case LEAVE_COMPONENTS_VIEW:
	    case LEAVE_ABOUT_VIEW:
	      // can't leave if you aren't already inside
	      if (state.currentView === action.currentView) {
	        return _extends({}, state, {
	          currentView: action.currentView,
	          enterTime: action.enterTime,
	          leaveTime: action.leaveTime
	        });
	      }
	      return state;
	
	    default:
	      return state;
	  }
	};
	
	exports.default = _default;
	
	// /////////////////////
	// action creators
	// /////////////////////
	
	function enterHome() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);
	
	  return {
	    type: ENTER_HOME_VIEW,
	    currentView: 'home',
	    enterTime: time,
	    leaveTime: null
	  };
	}
	
	function leaveHome() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);
	
	  return {
	    type: LEAVE_HOME_VIEW,
	    currentView: 'home',
	    enterTime: null,
	    leaveTime: time
	  };
	}
	
	function enterComponents() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);
	
	  return {
	    type: ENTER_COMPONENTS_VIEW,
	    currentView: 'components',
	    enterTime: time,
	    leaveTime: null
	  };
	}
	
	function leaveComponents() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);
	
	  return {
	    type: LEAVE_COMPONENTS_VIEW,
	    currentView: 'components',
	    enterTime: null,
	    leaveTime: time
	  };
	}
	
	function enterAbout() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);
	
	  return {
	    type: ENTER_ABOUT_VIEW,
	    currentView: 'about',
	    enterTime: time,
	    leaveTime: null
	  };
	}
	
	function leaveAbout() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);
	
	  return {
	    type: LEAVE_ABOUT_VIEW,
	    currentView: 'about',
	    enterTime: null,
	    leaveTime: time
	  };
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(ENTER_HOME_VIEW, 'ENTER_HOME_VIEW', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW, 'LEAVE_HOME_VIEW', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(ENTER_COMPONENTS_VIEW, 'ENTER_COMPONENTS_VIEW', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(LEAVE_COMPONENTS_VIEW, 'LEAVE_COMPONENTS_VIEW', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW, 'ENTER_ABOUT_VIEW', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW, 'LEAVE_ABOUT_VIEW', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(enterHome, 'enterHome', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(leaveHome, 'leaveHome', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(enterComponents, 'enterComponents', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(leaveComponents, 'leaveComponents', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(enterAbout, 'enterAbout', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(leaveAbout, 'leaveAbout', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/views.js');
	}();

	;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(995);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(996);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ANIMATION_DELAY_MS = 500;
	
	var AnimatedView = function (_PureComponent) {
	  _inherits(AnimatedView, _PureComponent);
	
	  function AnimatedView() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AnimatedView);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      animated: true,
	      viewEnters: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AnimatedView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var delay = this.props.delay;
	
	
	      this.enterAnimationTimer = setTimeout(function () {
	        return _this2.setState({ viewEnters: true });
	      }, delay);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterAnimationTimer);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          animated = _state.animated,
	          viewEnters = _state.viewEnters;
	      var children = this.props.children;
	
	
	      return _react2.default.createElement(
	        'section',
	        {
	          className: (0, _classnames2.default)({
	            'content': true,
	            'invisible': !viewEnters && animated,
	            'view-enter': viewEnters && animated
	          }) },
	        children
	      );
	    }
	  }]);
	
	  return AnimatedView;
	}(_react.PureComponent);
	
	AnimatedView.propTypes = {
	  children: _react.PropTypes.node,
	  delay: _react.PropTypes.number
	};
	
	AnimatedView.defaultProps = {
	  delay: ANIMATION_DELAY_MS
	};
	
	var _default = AnimatedView;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ANIMATION_DELAY_MS, 'ANIMATION_DELAY_MS', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/animatedView/AnimatedView.js');
	
	  __REACT_HOT_LOADER__.register(AnimatedView, 'AnimatedView', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/animatedView/AnimatedView.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/animatedView/AnimatedView.js');
	}();

	;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BackToTop = exports.NavigationBar = exports.Jumbotron = undefined;
	
	var _Jumbotron = __webpack_require__(518);
	
	var _Jumbotron2 = _interopRequireDefault(_Jumbotron);
	
	var _NavigationBar = __webpack_require__(519);
	
	var _NavigationBar2 = _interopRequireDefault(_NavigationBar);
	
	var _BackToTop = __webpack_require__(514);
	
	var _BackToTop2 = _interopRequireDefault(_BackToTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Jumbotron = _Jumbotron2.default;
	exports.NavigationBar = _NavigationBar2.default;
	exports.BackToTop = _BackToTop2.default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageNotFound = exports.Home = exports.About = undefined;
	
	var _About = __webpack_require__(534);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Home = __webpack_require__(535);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _PageNotFound = __webpack_require__(536);
	
	var _PageNotFound2 = _interopRequireDefault(_PageNotFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.About = _About2.default;
	exports.Home = _Home2.default;
	exports.PageNotFound = _PageNotFound2.default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },

/***/ 474:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(106);
	
	var _reactRedux = __webpack_require__(155);
	
	var _reactRouterRedux = __webpack_require__(156);
	
	var _configureStore = __webpack_require__(532);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-process-env */
	
	
	var store = (0, _configureStore2.default)();
	var syncedHistory = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	
	var Root = function (_Component) {
	  _inherits(Root, _Component);
	
	  function Root() {
	    _classCallCheck(this, Root);
	
	    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	  }
	
	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      var routes = this.props.routes;
	
	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Router,
	            { history: syncedHistory },
	            routes()
	          )
	        )
	      );
	    }
	  }]);
	
	  return Root;
	}(_react.Component);
	
	Root.propTypes = {
	  routes: _react.PropTypes.any
	};
	
	var _default = Root;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(store, 'store', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/Root.js');
	
	  __REACT_HOT_LOADER__.register(syncedHistory, 'syncedHistory', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/Root.js');
	
	  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/Root.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/Root.js');
	}();

	;

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _smoothScroll = __webpack_require__(517);
	
	var _BackToTopButton = __webpack_require__(515);
	
	var _BackToTopButton2 = _interopRequireDefault(_BackToTopButton);
	
	var _reactMotion = __webpack_require__(465);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $:true */
	
	var BackToTop = function (_Component) {
	  _inherits(BackToTop, _Component);
	
	  function BackToTop() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, BackToTop);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      windowScrollY: 0,
	      showBackButton: false
	    }, _this.handleWindowScroll = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleWindowScroll__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _this.scrollDone = function () {
	      var _this3;
	
	      return (_this3 = _this).__scrollDone__REACT_HOT_LOADER__.apply(_this3, arguments);
	    }, _this.handlesOnBackButtonClick = function () {
	      var _this4;
	
	      return (_this4 = _this).__handlesOnBackButtonClick__REACT_HOT_LOADER__.apply(_this4, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(BackToTop, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      window.addEventListener('scroll', this.handleWindowScroll);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.handleWindowScroll);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var showBackButton = this.state.showBackButton;
	
	      return _react2.default.createElement(
	        _reactMotion.Motion,
	        { style: { x: (0, _reactMotion.spring)(showBackButton ? 0 : 120, _reactMotion.presets.stiff) } },
	        function (_ref2) {
	          var x = _ref2.x;
	          return _react2.default.createElement(_BackToTopButton2.default, {
	            position: 'bottom-right',
	            onClick: _this5.handlesOnBackButtonClick,
	            motionStyle: {
	              WebkitTransform: 'translate3d(' + x + 'px, 0, 0)',
	              transform: 'translate3d(' + x + 'px, 0, 0)'
	            }
	          });
	        }
	      );
	    }
	  }, {
	    key: '__handleWindowScroll__REACT_HOT_LOADER__',
	    value: function __handleWindowScroll__REACT_HOT_LOADER__() {
	      if ($) {
	        var windowScrollY = this.state.windowScrollY;
	        var minScrollY = this.props.minScrollY;
	
	        var currentWindowScrollY = $(window).scrollTop();
	
	        if (windowScrollY !== currentWindowScrollY) {
	          var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;
	
	          this.setState({
	            windowScrollY: currentWindowScrollY,
	            showBackButton: shouldShowBackButton
	          });
	        }
	      } else {
	        /* eslint-disable no-throw-literal*/
	        throw 'BackToTop component requires jQuery';
	        /* eslint-enable no-throw-literal*/
	      }
	    }
	  }, {
	    key: '__scrollDone__REACT_HOT_LOADER__',
	    value: function __scrollDone__REACT_HOT_LOADER__() {
	      var onScrollDone = this.props.onScrollDone;
	
	      if (onScrollDone) {
	        onScrollDone();
	      }
	    }
	  }, {
	    key: '__handlesOnBackButtonClick__REACT_HOT_LOADER__',
	    value: function __handlesOnBackButtonClick__REACT_HOT_LOADER__(event) {
	      event.preventDefault();
	      var _props = this.props,
	          scrollTo = _props.scrollTo,
	          minScrollY = _props.minScrollY;
	      var windowScrollY = this.state.windowScrollY;
	
	
	      if (windowScrollY && windowScrollY > minScrollY) {
	        _smoothScroll.smoothScroll.scrollTo(scrollTo, this.scrollDone);
	      }
	    }
	  }]);
	
	  return BackToTop;
	}(_react.Component);
	
	BackToTop.propTypes = {
	  minScrollY: _react.PropTypes.number,
	  scrollTo: _react.PropTypes.string.isRequired,
	  onScrollDone: _react.PropTypes.func
	};
	
	BackToTop.defaultProps = {
	  minScrollY: 120
	};
	
	var _default = BackToTop;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(BackToTop, 'BackToTop', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/BackToTop.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/BackToTop.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(140)))

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _UpIcon = __webpack_require__(516);
	
	var _UpIcon2 = _interopRequireDefault(_UpIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultBackGroundColor = '#4A4A4A';
	var sideOffset = '-10px';
	var bottomOffset = '40px';
	var defaultWidth = '100px';
	var defaultZindex = 10;
	var defaultOpacity = 0.5;
	var defaultStyle = {
	  position: 'fixed',
	  right: sideOffset,
	  left: '',
	  bottom: bottomOffset,
	  width: defaultWidth,
	  zIndex: defaultZindex,
	  opacity: defaultOpacity,
	  backgroundColor: defaultBackGroundColor
	};
	
	var BackToTopButton = function BackToTopButton(_ref) {
	  var onClick = _ref.onClick,
	      position = _ref.position,
	      children = _ref.children,
	      motionStyle = _ref.motionStyle;
	
	  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));
	
	  return _react2.default.createElement(
	    'button',
	    {
	      style: buttonStyle,
	      className: (0, _classnames2.default)({
	        'btn': true
	      }),
	      onClick: onClick },
	    !children && _react2.default.createElement(
	      'div',
	      { style: { marginRight: '10px' } },
	      _react2.default.createElement(_UpIcon2.default, { color: '#F1F1F1' })
	    ),
	    !!children && children
	  );
	};
	
	BackToTopButton.propTypes = {
	  position: _react.PropTypes.oneOf(['bottom-left', 'bottom-right']),
	  onClick: _react.PropTypes.func.isRequired,
	  children: _react.PropTypes.node,
	  motionStyle: _react.PropTypes.object
	};
	
	BackToTopButton.defaultProps = {
	  position: 'bottom-right'
	};
	
	function setPosition() {
	  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
	  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;
	
	  var style = _extends({}, refStyle);
	
	  switch (position) {
	    case 'bottom-right':
	      style.right = sideOffset;
	      style.left = '';
	      return style;
	
	    case 'bottom-left':
	      style.right = '';
	      style.left = sideOffset;
	      return style;
	
	    default:
	      return refStyle;
	  }
	}
	
	var _default = BackToTopButton;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(defaultBackGroundColor, 'defaultBackGroundColor', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(sideOffset, 'sideOffset', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(bottomOffset, 'bottomOffset', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultWidth, 'defaultWidth', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultZindex, 'defaultZindex', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultOpacity, 'defaultOpacity', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(defaultStyle, 'defaultStyle', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(BackToTopButton, 'BackToTopButton', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(setPosition, 'setPosition', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
	}();

	;

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UpIcon = function UpIcon(_ref) {
	  var color = _ref.color;
	
	  return _react2.default.createElement(
	    "svg",
	    {
	      width: "24px",
	      height: "24px",
	      viewBox: "0 0 512 512",
	      fill: "" + color },
	    _react2.default.createElement("path", { d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z" })
	  );
	};
	
	UpIcon.propTypes = {
	  color: _react.PropTypes.string
	};
	
	UpIcon.defaultProps = {
	  color: '#F1F1F1'
	};
	
	var _default = UpIcon;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(UpIcon, "UpIcon", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/UpIcon.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/backToTopButton/UpIcon.js");
	}();

	;

/***/ },

/***/ 517:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var smoothScroll = exports.smoothScroll = {
	  timer: null,
	
	  stop: function stop() {
	    clearTimeout(this.timer);
	  },
	  scrollTo: function scrollTo(id, callback) {
	    var settings = {
	      duration: 1000,
	      easing: {
	        outQuint: function outQuint(x, t, b, c, d) {
	          /* eslint-disable no-param-reassign*/
	          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	          /* eslint-enable no-param-reassign*/
	        }
	      }
	    };
	    var percentage = void 0;
	    var node = document.getElementById(id);
	    var nodeTop = node.offsetTop;
	    var nodeHeight = node.offsetHeight;
	    var body = document.body;
	    var html = document.documentElement;
	    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	    var windowHeight = window.innerHeight;
	    var offset = window.pageYOffset;
	    var delta = nodeTop - offset;
	    var bottomScrollableY = height - windowHeight;
	    var targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;
	
	    var startTime = Date.now();
	    percentage = 0;
	
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	
	    function step() {
	      var yScroll = void 0;
	      var elapsed = Date.now() - startTime;
	
	      if (elapsed > settings.duration) {
	        clearTimeout(this.timer);
	      }
	
	      percentage = elapsed / settings.duration;
	
	      if (percentage > 1) {
	        clearTimeout(this.timer);
	
	        if (callback) {
	          callback();
	        }
	      } else {
	        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
	        window.scrollTo(0, yScroll);
	        this.timer = setTimeout(step, 10);
	      }
	    }
	
	    this.timer = setTimeout(step, 10);
	  }
	};
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(smoothScroll, "smoothScroll", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/backToTop/lib/smoothScroll.js");
	}();

	;

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Jumbotron = function Jumbotron(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "jumbotron" },
	    props.children
	  );
	};
	
	Jumbotron.propTypes = {
	  children: _react.PropTypes.node
	};
	
	var _default = Jumbotron;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Jumbotron, "Jumbotron", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/jumbotron/Jumbotron.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/jumbotron/Jumbotron.js");
	}();

	;

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Humburger = __webpack_require__(520);
	
	var _Humburger2 = _interopRequireDefault(_Humburger);
	
	var _LeftNav = __webpack_require__(521);
	
	var _LeftNav2 = _interopRequireDefault(_LeftNav);
	
	var _RightNav = __webpack_require__(523);
	
	var _RightNav2 = _interopRequireDefault(_RightNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationBar = function NavigationBar(_ref) {
	  var brand = _ref.brand,
	      navModel = _ref.navModel,
	      handleLeftNavItemClick = _ref.handleLeftNavItemClick,
	      handleRightNavItemClick = _ref.handleRightNavItemClick;
	
	  return _react2.default.createElement(
	    'nav',
	    { className: 'navbar navbar-default' },
	    _react2.default.createElement(
	      'div',
	      { className: 'containersCustom' },
	      _react2.default.createElement(
	        'div',
	        { className: 'navbar-header' },
	        _react2.default.createElement(_Humburger2.default, null),
	        _react2.default.createElement(
	          'a',
	          { className: 'navbar-brand' },
	          brand
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        {
	          className: 'collapse navbar-collapse',
	          id: 'bs-example-navbar-collapse-1' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav navbar-nav' },
	          _react2.default.createElement(_LeftNav2.default, {
	            leftLinks: navModel.leftLinks,
	            onLeftNavButtonClick: handleLeftNavItemClick
	          })
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav navbar-nav navbar-right' },
	          _react2.default.createElement(_RightNav2.default, {
	            rightLinks: navModel.rightLinks,
	            onRightNavButtonClick: handleRightNavItemClick
	          })
	        )
	      )
	    )
	  );
	};
	
	NavigationBar.propTypes = {
	  brand: _react.PropTypes.string,
	  handleLeftNavItemClick: _react.PropTypes.func,
	  handleRightNavItemClick: _react.PropTypes.func,
	  navModel: _react.PropTypes.shape({
	    leftLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      label: _react.PropTypes.string.isRequired,
	      link: _react.PropTypes.string.isRequired
	    })).isRequired,
	    rightLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      label: _react.PropTypes.string.isRequired,
	      link: _react.PropTypes.string.isRequired
	    })).isRequired
	  })
	};
	
	NavigationBar.defaultProps = {
	  brand: 'brand'
	};
	
	var _default = NavigationBar;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(NavigationBar, 'NavigationBar', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/NavigationBar.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/NavigationBar.js');
	}();

	;

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Humburger = function Humburger() {
	  return _react2.default.createElement(
	    "button",
	    {
	      className: "navbar-toggle collapsed",
	      type: "button",
	      "data-toggle": "collapse",
	      "data-target": "#bs-example-navbar-collapse-1" },
	    _react2.default.createElement(
	      "span",
	      { className: "sr-only" },
	      "Toggle navigation"
	    ),
	    _react2.default.createElement("span", { className: "icon-bar" }),
	    _react2.default.createElement("span", { className: "icon-bar" }),
	    _react2.default.createElement("span", { className: "icon-bar" })
	  );
	};
	
	var _default = Humburger;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Humburger, "Humburger", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/humburger/Humburger.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/humburger/Humburger.js");
	}();

	;

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LeftNavButton = __webpack_require__(522);
	
	var _LeftNavButton2 = _interopRequireDefault(_LeftNavButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LeftNav = function LeftNav(_ref) {
	  var leftLinks = _ref.leftLinks,
	      onLeftNavButtonClick = _ref.onLeftNavButtonClick;
	
	  return _react2.default.createElement(
	    'ul',
	    { className: 'nav navbar-nav' },
	    leftLinks.map(function (aLinkBtn, index) {
	      return _react2.default.createElement(_LeftNavButton2.default, {
	        key: index,
	        link: aLinkBtn.link,
	        label: aLinkBtn.label,
	        viewName: aLinkBtn.view,
	        onClick: onLeftNavButtonClick
	      });
	    })
	  );
	};
	
	LeftNav.propTypes = {
	  leftLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    link: _react.PropTypes.string,
	    label: _react.PropTypes.string,
	    viewName: _react.PropTypes.string
	  })),
	  onLeftNavButtonClick: _react.PropTypes.func
	};
	
	var _default = LeftNav;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/leftNav/LeftNav.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/leftNav/LeftNav.js');
	}();

	;

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LeftNavButton = function (_PureComponent) {
	  _inherits(LeftNavButton, _PureComponent);
	
	  function LeftNavButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LeftNavButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(LeftNavButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          link = _props.link,
	          label = _props.label;
	
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          {
	            to: link,
	            onClick: this.handleLeftNavItemClick },
	          label
	        )
	      );
	    }
	  }, {
	    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          viewName = _props2.viewName;
	
	      onClick(event, viewName);
	    }
	  }]);
	
	  return LeftNavButton;
	}(_react.PureComponent);
	
	LeftNavButton.propTypes = {
	  link: _react.PropTypes.string,
	  label: _react.PropTypes.string,
	  viewName: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	
	var _default = LeftNavButton;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(LeftNavButton, 'LeftNavButton', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
	}();

	;

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RightNavButton = __webpack_require__(524);
	
	var _RightNavButton2 = _interopRequireDefault(_RightNavButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RightNav = function RightNav(_ref) {
	  var rightLinks = _ref.rightLinks,
	      onRightNavButtonClick = _ref.onRightNavButtonClick;
	
	  return _react2.default.createElement(
	    'ul',
	    { className: 'nav navbar-nav navbar-right' },
	    rightLinks.map(function (aLinkBtn, index) {
	      return _react2.default.createElement(_RightNavButton2.default, {
	        key: index,
	        link: aLinkBtn.link,
	        label: aLinkBtn.label,
	        viewName: aLinkBtn.view,
	        onClick: onRightNavButtonClick
	      });
	    })
	  );
	};
	
	RightNav.propTypes = {
	  rightLinks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    link: _react.PropTypes.string,
	    label: _react.PropTypes.string,
	    viewName: _react.PropTypes.string
	  })),
	  onRightNavButtonClick: _react.PropTypes.func
	};
	
	var _default = RightNav;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(RightNav, 'RightNav', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/rightNav/RightNav.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/rightNav/RightNav.js');
	}();

	;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RightNavButton = function (_PureComponent) {
	  _inherits(RightNavButton, _PureComponent);
	
	  function RightNavButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RightNavButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RightNavButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          link = _props.link,
	          label = _props.label;
	
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          {
	            to: link,
	            onClick: this.handleRightNavItemClick },
	          label
	        )
	      );
	    }
	  }, {
	    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          viewName = _props2.viewName;
	
	      onClick(event, viewName);
	    }
	  }]);
	
	  return RightNavButton;
	}(_react.PureComponent);
	
	RightNavButton.propTypes = {
	  link: _react.PropTypes.string,
	  label: _react.PropTypes.string,
	  viewName: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	
	var _default = RightNavButton;
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(RightNavButton, 'RightNavButton', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
	}();

	;

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(155);
	
	var _redux = __webpack_require__(86);
	
	var _views = __webpack_require__(122);
	
	var viewsActions = _interopRequireWildcard(_views);
	
	var _views2 = __webpack_require__(161);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    currentView: state.views.currentView
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    enterAbout: viewsActions.enterAbout,
	    leaveAbout: viewsActions.leaveAbout
	  }, dispatch);
	};
	
	/*
	  without bindActionCreators:
	 */
	// const mapDispatchToProps = (dispatch) => {
	//   return {
	//     enterAbout: () => dispatch(viewsActions.enterAbout()),
	//     leaveAbout: () => dispatch(viewsActions.leaveAbout())
	//   };
	// };
	
	var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_views2.About);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/about/About.js');
	
	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/about/About.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/about/About.js');
	}();

	;

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(160);
	
	var _navigation = __webpack_require__(813);
	
	var _navigation2 = _interopRequireDefault(_navigation);
	
	var _redux = __webpack_require__(86);
	
	var _reactRedux = __webpack_require__(155);
	
	var _views = __webpack_require__(122);
	
	var viewsActions = _interopRequireWildcard(_views);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, App);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      navModel: _navigation2.default
	    }, _this.handleLeftNavItemClick = function () {
	      var _this2;
	
	      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _this.handleRightNavItemClick = function () {
	      var _this3;
	
	      return (_this3 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this3, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var navModel = this.state.navModel;
	      var children = this.props.children;
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'appContainer' },
	        _react2.default.createElement(_components.NavigationBar, {
	          brand: navModel.brand,
	          navModel: navModel,
	          handleLeftNavItemClick: this.handleLeftNavItemClick,
	          handleRightNavItemClick: this.handleRightNavItemClick
	        }),
	        _react2.default.createElement('h1', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          children
	        ),
	        _react2.default.createElement(_components.BackToTop, {
	          minScrollY: 40,
	          scrollTo: 'appContainer'
	        })
	      );
	    }
	  }, {
	    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event, viewName) {
	      // something to do here?
	    }
	  }, {
	    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
	    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event, viewName) {
	      // something to do here?
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	// statics :
	
	
	App.propTypes = {
	  children: _react.PropTypes.node,
	  history: _react.PropTypes.object,
	  location: _react.PropTypes.object,
	  actions: _react.PropTypes.object
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    currentView: state
	  };
	};
	
	// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(_extends({}, viewsActions), dispatch)
	  };
	};
	
	var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = _default;
	;
	
	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(App, 'App', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/app/App.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/app/App.js');
	
	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/app/App.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/app/App.js');
	}();

	;

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(155);
	
	var _redux = __webpack_require__(86);
	
	var _views = __webpack_require__(122);
	
	var viewsActions = _interopRequireWildcard(_views);
	
	var _views2 = __webpack_require__(161);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    currentView: state.views.currentView
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    enterHome: viewsActions.enterHome,
	    leaveHome: viewsActions.leaveHome
	  }, dispatch);
	};
	
	/*
	  without bindActionCreators:
	 */
	// const mapDispatchToProps = (dispatch) => {
	//   return {
	//     enterHome: () => dispatch(viewsActions.enterHome()),
	//     leaveHome: () => dispatch(viewsActions.leaveHome())
	//   };
	// };
	
	var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_views2.Home);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/home/Home.js');
	
	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/home/Home.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/containers/home/Home.js');
	}();

	;

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConnectedAbout = exports.ConnectedHome = exports.App = undefined;
	
	var _App = __webpack_require__(526);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Home = __webpack_require__(527);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _About = __webpack_require__(525);
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _App2.default;
	exports.ConnectedHome = _Home2.default;
	exports.ConnectedAbout = _About2.default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FETCH = exports.FETCH_MOCK = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak
	
	var _axios = __webpack_require__(248);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FETCH_MOCK = exports.FETCH_MOCK = 'FETCH_MOCK';
	var FETCH = exports.FETCH = 'FETCH';
	// //////////////////////////////////////////////////////////////
	//          fetch middleware:
	// //////////////////////////////////////////////////////////////
	// - no more use redux thunk in your actions creators = less code
	// - have a FETCH_MOCK mode (no backend need just json or js mocks supplied) for nearly no effort
	// - returns promises
	// //////////////////////////////////////////////////////////////
	
	// USAGE: FETCH_MOCK mode
	// in any action just add fetch object like:
	// {
	//  fetch: {
	//    type: 'FETCH_MOCK',
	//    actionTypes: {
	//      request: 'TYPE_FOR_REQUEST',
	//      success: 'TYPE_FOR_RECEIVED',
	//      fail: 'TYPE_FOR_ERROR',
	//    },
	//    mockResult: any
	//  }
	// }
	//
	
	// Usage: FETCH mode
	// in any action just add fetch object like:
	// {
	//  fetch: {
	//    type: 'FETCH',
	//    actionTypes: {
	//      request: 'TYPE_FOR_REQUEST',
	//      success: 'TYPE_FOR_RECEIVED',
	//      fail: 'TYPE_FOR_ERROR',
	//    },
	//    url: 'an url',
	//    method: 'get', // lower case, one of 'get', 'post'...
	//    options: {} // OPTIONAL
	//  }
	// }
	//
	//
	
	var fetchMiddleware = function fetchMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      if (!action.fetch) {
	        return next(action);
	      }
	
	      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
	        return next(action);
	      }
	
	      if (!action.fetch.actionTypes) {
	        return next(action);
	      }
	
	      /**
	       * fetch mock
	       * @type {[type]}
	       */
	      if (action.fetch.type === FETCH_MOCK) {
	        if (!action.fetch.mockResult) {
	          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
	        }
	
	        var _action$fetch = action.fetch,
	            _action$fetch$actionT = _action$fetch.actionTypes,
	            request = _action$fetch$actionT.request,
	            success = _action$fetch$actionT.success,
	            mockResult = _action$fetch.mockResult;
	
	        // request
	
	        store.dispatch({ type: request });
	
	        // received successful for mock
	        return Promise.resolve(store.dispatch({
	          type: success,
	          payload: mockResult
	        }));
	      }
	
	      if (action.fetch.type === FETCH) {
	        var _ret = function () {
	          var _action$fetch2 = action.fetch,
	              _action$fetch2$action = _action$fetch2.actionTypes,
	              request = _action$fetch2$action.request,
	              success = _action$fetch2$action.success,
	              fail = _action$fetch2$action.fail,
	              url = _action$fetch2.url,
	              method = _action$fetch2.method,
	              options = _action$fetch2.options;
	
	          // request
	
	          store.dispatch({ type: request, url: url, method: method });
	
	          // fetch server (success or fail)
	          // returns a Promise
	          return {
	            v: _axios2.default.request(_extends({
	              method: method,
	              url: url,
	              withCredentials: true,
	              headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	                // 'Acces-Control-Allow-Origin': '*'
	              }
	            }, options)).then(function (data) {
	              return store.dispatch({ type: success, payload: data.data });
	            }).catch(function (err) {
	              return store.dispatch({ type: fail, error: err });
	            })
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	      return next(action);
	    };
	  };
	};
	
	var _default = fetchMiddleware;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(FETCH_MOCK, 'FETCH_MOCK', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');
	
	  __REACT_HOT_LOADER__.register(FETCH, 'FETCH', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');
	
	  __REACT_HOT_LOADER__.register(fetchMiddleware, 'fetchMiddleware', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');
	}();

	;

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reactRouterRedux = __webpack_require__(156);
	
	var _redux = __webpack_require__(86);
	
	var _views = __webpack_require__(122);
	
	var _views2 = _interopRequireDefault(_views);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducers = exports.reducers = {
	  views: _views2.default
	};
	
	var _default = (0, _redux.combineReducers)(_extends({}, reducers, {
	  routing: _reactRouterRedux.routerReducer
	}));
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/reducers.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/modules/reducers.js');
	}();

	;

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //  weak
	
	exports.default = configureStore;
	
	var _redux = __webpack_require__(86);
	
	var _reduxLogger = __webpack_require__(490);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxThunk = __webpack_require__(491);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(530);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _fetchMiddleware = __webpack_require__(529);
	
	var _fetchMiddleware2 = _interopRequireDefault(_fetchMiddleware);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loggerMiddleware = (0, _reduxLogger2.default)({
	  level: 'info',
	  collapsed: true
	});
	
	// createStore : enhancer
	// NOTE: if redux devtools extension is not installed, we just keep using Redux compose
	var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && // for universal ("isomorphic") apps
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	  // see: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
	}) : _redux.compose;
	
	var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, _fetchMiddleware2.default, loggerMiddleware // logger at the end
	));
	
	function configureStore(initialState) {
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
	  if (false) {
	    module.hot.accept('../modules/reducers', function () {
	      return store.replaceReducer(require('../modules/reducers').default);
	    });
	  }
	  return store;
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(loggerMiddleware, 'loggerMiddleware', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/store/configureStore.dev.js');
	
	  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/store/configureStore.dev.js');
	
	  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/store/configureStore.dev.js');
	
	  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/redux/store/configureStore.dev.js');
	}();

	;

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint no-process-env:0 */
	if (false) {
	  module.exports = require('./configureStore.prod');
	} else {
	  module.exports = __webpack_require__(531);
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(106);
	
	var _containers = __webpack_require__(528);
	
	var _views = __webpack_require__(161);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Routes = function Routes() {
	  return _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _containers.App },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _containers.ConnectedHome, onEnter: scrollToTop }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _containers.ConnectedAbout, onEnter: scrollToTop }),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _views.PageNotFound, onEnter: scrollToTop })
	  );
	};
	
	function scrollToTop() {
	  window.scrollTo(0, 0);
	}
	
	var _default = Routes;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Routes, 'Routes', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/routes/Routes.js');
	
	  __REACT_HOT_LOADER__.register(scrollToTop, 'scrollToTop', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/routes/Routes.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/routes/Routes.js');
	}();

	;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AnimatedView = __webpack_require__(159);
	
	var _AnimatedView2 = _interopRequireDefault(_AnimatedView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_PureComponent) {
	  _inherits(About, _PureComponent);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }
	
	  _createClass(About, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var enterAbout = this.props.enterAbout;
	
	      enterAbout();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var leaveAbout = this.props.leaveAbout;
	
	      leaveAbout();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _AnimatedView2.default,
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'About'
	        )
	      );
	    }
	  }]);
	
	  return About;
	}(_react.PureComponent);
	
	About.propTypes = {
	  currentView: _react.PropTypes.string.isRequired,
	  enterAbout: _react.PropTypes.func.isRequired,
	  leaveAbout: _react.PropTypes.func.isRequired
	};
	
	var _default = About;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(About, 'About', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/views/about/About.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/views/about/About.js');
	}();

	;

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(160);
	
	var _AnimatedView = __webpack_require__(159);
	
	var _AnimatedView2 = _interopRequireDefault(_AnimatedView);
	
	var _reactRouter = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_PureComponent) {
	  _inherits(Home, _PureComponent);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var enterHome = this.props.enterHome;
	
	      enterHome();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var leaveHome = this.props.leaveHome;
	
	      leaveHome();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _AnimatedView2.default,
	        null,
	        _react2.default.createElement(
	          _components.Jumbotron,
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Full ES2015 ReactJS + Bootstrap'
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'with Hot Reload!!!'
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'with React Router (SPA)'
	          ),
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Starter'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                className: 'btn btn-success btn-lg',
	                to: '/about' },
	              _react2.default.createElement('i', { className: 'fa fa-info' }),
	              '\xA0 go to about'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react.PureComponent);
	
	Home.propTypes = {
	  currentView: _react.PropTypes.string.isRequired,
	  enterHome: _react.PropTypes.func.isRequired,
	  leaveHome: _react.PropTypes.func.isRequired
	};
	
	var _default = Home;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/views/home/Home.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/views/home/Home.js');
	}();

	;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(160);
	
	var _AnimatedView = __webpack_require__(159);
	
	var _AnimatedView2 = _interopRequireDefault(_AnimatedView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PageNotFound = function (_PureComponent) {
	  _inherits(PageNotFound, _PureComponent);
	
	  function PageNotFound() {
	    _classCallCheck(this, PageNotFound);
	
	    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
	  }
	
	  _createClass(PageNotFound, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _AnimatedView2.default,
	        null,
	        _react2.default.createElement(
	          _components.Jumbotron,
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Sorry this page does not exists...'
	          )
	        )
	      );
	    }
	  }]);
	
	  return PageNotFound;
	}(_react.PureComponent);
	
	var _default = PageNotFound;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/views/pageNotFound/PageNotFound.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/kentor/GitProjects/react-redux-bootstrap-webpack-starter/src/app/views/pageNotFound/PageNotFound.js');
	}();

	;

/***/ },

/***/ 785:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 786:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 787:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 788:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 813:
/***/ function(module, exports) {

	module.exports = {
		"brand": "React Redux Bootstrap Starter",
		"leftLinks": [],
		"rightLinks": [
			{
				"label": "Home",
				"link": "/",
				"view": "home",
				"isRouteBtn": true
			},
			{
				"label": "About",
				"link": "/about",
				"view": "about",
				"isRouteBtn": true
			}
		]
	};

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(1);
	
	var _storeShape = __webpack_require__(473);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(474);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports["default"] = Provider;
	
	
	if (true) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = connect;
	
	var _react = __webpack_require__(1);
	
	var _storeShape = __webpack_require__(473);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(997);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(998);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(474);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(211);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(311);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(25);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	
	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }
	
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure,
	      pure = _options$pure === undefined ? true : _options$pure,
	      _options$withRef = options.withRef,
	      withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	
	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }
	
	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (true) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.store = props.store || context.store;
	
	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
	
	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }
	
	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }
	
	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
	
	        if (true) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };
	
	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';
	
	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }
	
	        if (true) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };
	
	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }
	
	        var dispatch = store.dispatch;
	
	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
	
	        if (true) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };
	
	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';
	
	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }
	
	        if (true) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };
	
	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }
	
	        this.mergedProps = nextMergedProps;
	        return true;
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };
	
	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }
	
	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }
	
	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged,
	            hasStoreStateChanged = this.hasStoreStateChanged,
	            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	            statePropsPrecalculationError = this.statePropsPrecalculationError,
	            renderedElement = this.renderedElement;
	
	
	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	
	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }
	
	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }
	
	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }
	
	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }
	
	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }
	
	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }
	
	        return this.renderedElement;
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };
	
	    if (true) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }
	
	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },

/***/ 997:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(86);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ }

});
//# sourceMappingURL=app.bundle.js.map