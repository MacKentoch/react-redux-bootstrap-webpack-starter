/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/front/index.tsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/Root.tsx":
/*!****************************!*\
  !*** ./src/front/Root.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var configureStore_1 = __importDefault(__webpack_require__(/*! ./redux/store/configureStore */ "./src/front/redux/store/configureStore.ts"));
var configureStore_2 = __webpack_require__(/*! ./redux/store/configureStore */ "./src/front/redux/store/configureStore.ts");
var ScrollToTop_1 = __importDefault(__webpack_require__(/*! ./components/scrollToTop/ScrollToTop */ "./src/front/components/scrollToTop/ScrollToTop.tsx"));
var MainLayout_1 = __importDefault(__webpack_require__(/*! ./layout/MainLayout */ "./src/front/layout/MainLayout/index.ts"));
var MainRoutes_1 = __importDefault(__webpack_require__(/*! ./routes/MainRoutes */ "./src/front/routes/MainRoutes.tsx"));
var routes_1 = __webpack_require__(/*! ./routes/routes */ "./src/front/routes/routes.ts");
var userAuthActions = __importStar(__webpack_require__(/*! ./redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.ts"));
var GlobalStyles_1 = __importDefault(__webpack_require__(/*! ./style/GlobalStyles */ "./src/front/style/GlobalStyles.ts"));
var store = configureStore_1.default({}).store;
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.componentDidMount = function () {
        store.dispatch(userAuthActions.checkUserIsConnected());
    };
    Root.prototype.componentDidCatch = function (error, info) {
        console.log('error was catch by Root component: ', { error: error, info: info });
    };
    Root.prototype.render = function () {
        return (react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: {} },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: configureStore_2.history },
                        react_1.default.createElement(ScrollToTop_1.default, null,
                            react_1.default.createElement(react_router_dom_1.Switch, null,
                                react_1.default.createElement(MainLayout_1.default, null,
                                    react_1.default.createElement(MainRoutes_1.default, null)),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "*", component: routes_1.PageNotFound })))),
                    react_1.default.createElement(GlobalStyles_1.default, null)))));
    };
    return Root;
}(react_2.Component));
exports.default = react_hot_loader_1.hot(module)(Root);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/Root.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/Root.tsx"); } })(); 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/front/components/backToTop/BackToTop.tsx":
/*!******************************************************!*\
  !*** ./src/front/components/backToTop/BackToTop.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var BackToTopButton_1 = __importDefault(__webpack_require__(/*! ./backToTopButton/BackToTopButton */ "./src/front/components/backToTop/backToTopButton/BackToTopButton.tsx"));
var react_motion_1 = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
function BackToTop(_a) {
    var _b = _a.minScrollY, minScrollY = _b === void 0 ? 120 : _b, _c = _a.onScrollDone, onScrollDone = _c === void 0 ? function () {
        return;
    } : _c;
    var _d = react_1.useState(false), showBackButton = _d[0], setShowBackButton = _d[1];
    var _e = react_1.useState(0), windowScrollY = _e[0], setWindowScrollY = _e[1];
    var _f = react_1.useState(false), tickingScollObserve = _f[0], setTickingScollObserve = _f[1];
    var handleWindowScroll = function () {
        if (!window) {
            return;
        }
        var currentWindowScrollY = window.pageYOffset !== undefined
            ? window.pageYOffset
            :
                (document.documentElement ||
                    document.body.parentNode ||
                    document.body).scrollTop;
        if (!tickingScollObserve) {
            window.requestAnimationFrame(function () {
                if (windowScrollY !== currentWindowScrollY) {
                    var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;
                    setWindowScrollY(currentWindowScrollY);
                    setShowBackButton(shouldShowBackButton);
                }
                setTickingScollObserve(false);
            });
        }
        setTickingScollObserve(true);
    };
    var handlesOnBackButtonClick = function (event) {
        event && event.preventDefault();
        if (window && windowScrollY && windowScrollY > minScrollY) {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
    };
    react_1.useEffect(function () {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleWindowScroll);
        }
        return function unsubscribeEvents() {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleWindowScroll);
            }
        };
    });
    return (react_1.default.createElement(react_motion_1.Motion, { style: { x: react_motion_1.spring(showBackButton ? 0 : 120, react_motion_1.presets.stiff) } }, function (_a) {
        var x = _a.x;
        return (react_1.default.createElement(BackToTopButton_1.default, { position: 'bottom-right', onClick: handlesOnBackButtonClick, motionStyle: {
                WebkitTransform: "translate3d(" + x + "px, 0, 0)",
                transform: "translate3d(" + x + "px, 0, 0)",
            } }));
    }));
}
BackToTop.displayName = 'BackToTop';
exports.default = BackToTop;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/BackToTop.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/BackToTop.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/BackToTopButton.tsx":
/*!****************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/BackToTopButton.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var UpIcon_1 = __importDefault(__webpack_require__(/*! ./UpIcon */ "./src/front/components/backToTop/backToTopButton/UpIcon.tsx"));
var WithRightMargin_1 = __importDefault(__webpack_require__(/*! ./styled/WithRightMargin */ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx"));
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
    backgroundColor: defaultBackGroundColor,
};
function setPosition(position, refStyle) {
    if (position === void 0) { position = 'bottom-right'; }
    if (refStyle === void 0) { refStyle = defaultStyle; }
    var style = __assign({}, refStyle);
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
var BackToTopButton = function (_a) {
    var onClick = _a.onClick, _b = _a.position, position = _b === void 0 ? 'bottom-right' : _b, children = _a.children, motionStyle = _a.motionStyle;
    var buttonStyle = setPosition(position, __assign({}, motionStyle, defaultStyle));
    return (react_1.default.createElement("button", { style: buttonStyle, className: classnames_1.default({
            btn: true,
        }), onClick: onClick },
        !children && (react_1.default.createElement(WithRightMargin_1.default, null,
            react_1.default.createElement(UpIcon_1.default, { color: '#F1F1F1' }))),
        !!children && children));
};
BackToTopButton.displayName = 'BackToTopButton';
exports.default = BackToTopButton;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/backToTopButton/BackToTopButton.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/backToTopButton/BackToTopButton.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/UpIcon.tsx":
/*!*******************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/UpIcon.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var UpIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#F1F1F1' : _b;
    return (react_1.default.createElement("svg", { width: "24px", height: "24px", viewBox: "0 0 512 512", fill: "" + color },
        react_1.default.createElement("path", { d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z" })));
};
UpIcon.displayName = 'UpIcon';
exports.default = UpIcon;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/backToTopButton/UpIcon.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/backToTopButton/UpIcon.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx":
/*!***********************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var WithRightMargin = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: 10px;\n"], ["\n  margin-right: 10px;\n"])));
exports.default = WithRightMargin;
var templateObject_1;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/fadeInEntrance/FadeInEntrance.tsx":
/*!****************************************************************!*\
  !*** ./src/front/components/fadeInEntrance/FadeInEntrance.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var FadeInDiv_1 = __importDefault(__webpack_require__(/*! ./styled/FadeInDiv */ "./src/front/components/fadeInEntrance/styled/FadeInDiv.tsx"));
function FadeInEntrance(_a) {
    var children = _a.children;
    return react_1.default.createElement(FadeInDiv_1.default, { startAnimation: true }, children);
}
FadeInEntrance.displayName = 'FadeInEntrance';
exports.default = FadeInEntrance;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/fadeInEntrance/FadeInEntrance.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/fadeInEntrance/FadeInEntrance.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/fadeInEntrance/index.ts":
/*!******************************************************!*\
  !*** ./src/front/components/fadeInEntrance/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FadeInEntrance_1 = __importDefault(__webpack_require__(/*! ./FadeInEntrance */ "./src/front/components/fadeInEntrance/FadeInEntrance.tsx"));
exports.default = FadeInEntrance_1.default;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/fadeInEntrance/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/fadeInEntrance/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/components/fadeInEntrance/styled/FadeInDiv.tsx":
/*!******************************************************************!*\
  !*** ./src/front/components/fadeInEntrance/styled/FadeInDiv.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var fadeIn = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"])));
var fadeInAnimationCss = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: 0;\n  animation-name: ", ";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"], ["\n  opacity: 0;\n  animation-name: ", ";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"])), fadeIn);
var FadeInDiv = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var startAnimation = _a.startAnimation;
    return startAnimation && fadeInAnimationCss;
});
exports.default = FadeInDiv;
var templateObject_1, templateObject_2, templateObject_3;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/fadeInEntrance/styled/FadeInDiv.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/fadeInEntrance/styled/FadeInDiv.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/logoutRoute/LogoutRoute.tsx":
/*!**********************************************************!*\
  !*** ./src/front/components/logoutRoute/LogoutRoute.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
function LogoutRoute(props) {
    var disconnectUser = props.disconnectUser;
    react_1.useEffect(function () { return disconnectUser(); });
    return (react_1.default.createElement(react_router_dom_1.Route, __assign({}, props),
        react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login' } })));
}
LogoutRoute.displayName = 'LogoutRoute';
exports.default = LogoutRoute;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/logoutRoute/LogoutRoute.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/logoutRoute/LogoutRoute.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/logoutRoute/index.ts":
/*!***************************************************!*\
  !*** ./src/front/components/logoutRoute/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var userAuthActions = __importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.ts"));
var LogoutRoute_1 = __importDefault(__webpack_require__(/*! ./LogoutRoute */ "./src/front/components/logoutRoute/LogoutRoute.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(__assign({}, userAuthActions), dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), react_router_dom_1.withRouter)(LogoutRoute_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/logoutRoute/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/logoutRoute/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/components/navigation/NavigationBar.tsx":
/*!***********************************************************!*\
  !*** ./src/front/components/navigation/NavigationBar.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
function NavigationBar(_a) {
    var brand = _a.brand, rightLinks = _a.navModel.rightLinks, leftNavItemClick = _a.leftNavItemClick, rightNavItemClick = _a.rightNavItemClick, isAuthenticated = _a.isAuthenticated, history = _a.history, disconnectUser = _a.disconnectUser;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggle = function (event) {
        event && event.preventDefault();
        setIsOpen(!isOpen);
    };
    var handlesNavItemClick = function (link) {
        if (link === void 0) { link = '/'; }
        return function (event) {
            event && event.preventDefault();
            history.push(link);
        };
    };
    var handlesDisconnect = function (event) {
        event && event.preventDefault();
        disconnectUser();
        history.push('/');
    };
    return (react_1.default.createElement(reactstrap_1.Navbar, { color: "light", light: true, expand: "md" },
        react_1.default.createElement(reactstrap_1.NavbarBrand, { href: "/" }, brand),
        react_1.default.createElement(reactstrap_1.NavbarToggler, { onClick: toggle }),
        react_1.default.createElement(reactstrap_1.Collapse, { isOpen: isOpen, navbar: true },
            react_1.default.createElement(reactstrap_1.Nav, { className: "ml-auto", navbar: true },
                rightLinks.map(function (_a, index) {
                    var label = _a.label, link = _a.link;
                    return (react_1.default.createElement(reactstrap_1.NavItem, { key: "" + index },
                        react_1.default.createElement(reactstrap_1.NavLink, { href: "#", onClick: handlesNavItemClick(link) }, label)));
                }),
                isAuthenticated && (react_1.default.createElement(reactstrap_1.NavItem, null,
                    react_1.default.createElement(reactstrap_1.NavLink, { href: "#", onClick: handlesDisconnect }, "Disconnect")))))));
}
NavigationBar.displayName = 'NavigationBar';
exports.default = NavigationBar;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/navigation/NavigationBar.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/navigation/NavigationBar.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/navigation/index.ts":
/*!**************************************************!*\
  !*** ./src/front/components/navigation/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var userAuthActions = __importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.ts"));
var NavigationBar_1 = __importDefault(__webpack_require__(/*! ./NavigationBar */ "./src/front/components/navigation/NavigationBar.tsx"));
var mapStateToProps = function (state) {
    return {
        token: state.userAuth.token,
        isAuthenticated: state.userAuth.isAuthenticated,
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(__assign({}, userAuthActions), dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), react_router_dom_1.withRouter)(NavigationBar_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/navigation/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/navigation/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/components/privateRoute/PrivateRoute.tsx":
/*!************************************************************!*\
  !*** ./src/front/components/privateRoute/PrivateRoute.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
function PrivateRoute(props) {
    var InnerComponent = props.component, rest = __rest(props, ["component"]);
    var location = props.location, checkUserIsConnected = props.checkUserIsConnected;
    var _a = (!!window && checkUserIsConnected()).isAuthenticated, isAuthenticated = _a === void 0 ? false : _a;
    return (react_1.default.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            return isAuthenticated ? (react_1.default.createElement(InnerComponent, __assign({}, props))) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login', state: { from: location } } }));
        } })));
}
PrivateRoute.displayName = 'PrivateRoute';
exports.default = PrivateRoute;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/privateRoute/PrivateRoute.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/privateRoute/PrivateRoute.tsx"); } })(); 

/***/ }),

/***/ "./src/front/components/privateRoute/index.ts":
/*!****************************************************!*\
  !*** ./src/front/components/privateRoute/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var userAuthActions = __importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.ts"));
var PrivateRoute_1 = __importDefault(__webpack_require__(/*! ./PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.tsx"));
var mapStateToProps = function (state) {
    return {
        isAuthenticated: state.userAuth.isAuthenticated,
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(__assign({}, userAuthActions), dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), react_router_dom_1.withRouter)(PrivateRoute_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/privateRoute/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/privateRoute/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/components/scrollToTop/ScrollToTop.tsx":
/*!**********************************************************!*\
  !*** ./src/front/components/scrollToTop/ScrollToTop.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
function useScrollToTopOnLocationChange(location) {
    var prevLocation = react_1.useRef();
    react_1.useEffect(function () {
        prevLocation.current = location;
    }, []);
    react_1.useEffect(function () {
        if (prevLocation.current !== location) {
            window && window.scrollTo(0, 0);
            prevLocation.current = location;
        }
    }, [location]);
}
function ScrollToTop(_a) {
    var children = _a.children, location = _a.location;
    useScrollToTopOnLocationChange(location);
    return react_1.default.createElement(react_1.Fragment, null, children);
}
ScrollToTop.displayName = 'ScrollToTop';
exports.default = react_router_1.withRouter(ScrollToTop);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/scrollToTop/ScrollToTop.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/components/scrollToTop/ScrollToTop.tsx"); } })(); 

/***/ }),

/***/ "./src/front/config/appConfig.ts":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = Object.freeze({
    DEV_MODE: true,
    api: {
        fakeEndPoint: 'api/somewhere',
        users: 'api/someusersapi',
    },
    sw: {
        path: 'public/assets/sw.js',
    },
});
exports.default = exports.appConfig;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/config/appConfig.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/config/appConfig.ts"); } })(); 

/***/ }),

/***/ "./src/front/config/navigation.ts":
/*!****************************************!*\
  !*** ./src/front/config/navigation.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var navigation = Object.freeze({
    brand: 'React Redux Bootstrap Starter',
    leftLinks: [],
    rightLinks: [
        {
            label: 'Home',
            link: '/',
        },
        {
            label: 'Protected',
            link: '/protected',
            view: 'protected',
            isRouteBtn: true,
        },
        {
            label: 'About',
            link: '/about',
            view: 'about',
            isRouteBtn: true,
        },
    ],
});
exports.default = navigation;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/config/navigation.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/config/navigation.ts"); } })(); 

/***/ }),

/***/ "./src/front/index.tsx":
/*!*****************************!*\
  !*** ./src/front/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var smoothscroll_polyfill_1 = __importDefault(__webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js"));
var loadable_components_1 = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
var Root_1 = __importDefault(__webpack_require__(/*! ./Root */ "./src/front/Root.tsx"));
var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
smoothscroll_polyfill_1.default.polyfill();
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = function () { return loadable_components_1.getState(); };
;
(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.');
        return [2];
    });
}); })();
bootstrapedElement && bootstrapedElement.hasChildNodes()
    ? loadable_components_1.loadComponents().then(function () { return react_dom_1.hydrate(react_1.default.createElement(Root_1.default, null), bootstrapedElement); })
    : react_dom_1.render(react_1.default.createElement(Root_1.default, null), bootstrapedElement);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/index.tsx"); } })(); 

/***/ }),

/***/ "./src/front/layout/MainLayout/MainLayout.tsx":
/*!****************************************************!*\
  !*** ./src/front/layout/MainLayout/MainLayout.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var navigation_1 = __importDefault(__webpack_require__(/*! ../../components/navigation */ "./src/front/components/navigation/index.ts"));
var BackToTop_1 = __importDefault(__webpack_require__(/*! ../../components/backToTop/BackToTop */ "./src/front/components/backToTop/BackToTop.tsx"));
var navigation_2 = __importDefault(__webpack_require__(/*! ../../config/navigation */ "./src/front/config/navigation.ts"));
var registerServiceWorker_1 = __importDefault(__webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/front/services/sw/registerServiceWorker.ts"));
function MainLayout(_a) {
    var history = _a.history, location = _a.location, match = _a.match, children = _a.children;
    react_1.useEffect(function () {
        if (typeof window !== undefined) {
            registerServiceWorker_1.default();
        }
    }, []);
    var handleLeftNavItemClick = react_1.useCallback(function (event, viewName) {
    }, []);
    var handleRightNavItemClick = react_1.useCallback(function (event, viewName) {
    }, []);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { id: "appContainer" },
            react_1.default.createElement(navigation_1.default, { brand: navigation_2.default.brand, navModel: navigation_2.default, leftNavItemClick: handleLeftNavItemClick, rightNavItemClick: handleRightNavItemClick }),
            react_1.default.createElement("div", { className: "container-fluid" }, children),
            react_1.default.createElement(BackToTop_1.default, { minScrollY: 40, scrollTo: 'appContainer' }))));
}
exports.default = react_router_1.withRouter(MainLayout);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/layout/MainLayout/MainLayout.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/layout/MainLayout/MainLayout.tsx"); } })(); 

/***/ }),

/***/ "./src/front/layout/MainLayout/index.ts":
/*!**********************************************!*\
  !*** ./src/front/layout/MainLayout/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MainLayout_1 = __importDefault(__webpack_require__(/*! ./MainLayout */ "./src/front/layout/MainLayout/MainLayout.tsx"));
exports.default = MainLayout_1.default;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/layout/MainLayout/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/layout/MainLayout/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/mock/fakeAPI.json":
/*!*************************************!*\
  !*** ./src/front/mock/fakeAPI.json ***!
  \*************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"label\":\"item 1\"},{\"id\":2,\"label\":\"item 2\"}]");

/***/ }),

/***/ "./src/front/mock/userInfosMock.json":
/*!*******************************************!*\
  !*** ./src/front/mock/userInfosMock.json ***!
  \*******************************************/
/*! exports provided: token, user, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ\",\"user\":{\"id\":111,\"login\":\"john.doe@fake.mail\",\"firstname\":\"John\",\"lastname\":\"Doe\",\"isAdmin\":true}}");

/***/ }),

/***/ "./src/front/pages/about/About.tsx":
/*!*****************************************!*\
  !*** ./src/front/pages/about/About.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fadeInEntrance_1 = __importDefault(__webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.ts"));
function About(props) {
    return (react_1.default.createElement(fadeInEntrance_1.default, null,
        react_1.default.createElement("h1", null, "About")));
}
About.displayName = 'About';
exports.default = About;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/about/About.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/about/About.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/about/index.ts":
/*!****************************************!*\
  !*** ./src/front/pages/about/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var About_1 = __importDefault(__webpack_require__(/*! ./About */ "./src/front/pages/about/About.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps))(About_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/about/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/about/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/pages/home/Home.tsx":
/*!***************************************!*\
  !*** ./src/front/pages/home/Home.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Jumbotron_1 = __importDefault(__webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js"));
var fadeInEntrance_1 = __importDefault(__webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.ts"));
var HomeInfo_1 = __importDefault(__webpack_require__(/*! ./styled/HomeInfo */ "./src/front/pages/home/styled/HomeInfo.tsx"));
var MainTitle_1 = __importDefault(__webpack_require__(/*! ./styled/MainTitle */ "./src/front/pages/home/styled/MainTitle.ts"));
var LightNote_1 = __importDefault(__webpack_require__(/*! ./styled/LightNote */ "./src/front/pages/home/styled/LightNote.tsx"));
function Home(props) {
    return (react_1.default.createElement(fadeInEntrance_1.default, null,
        react_1.default.createElement(Jumbotron_1.default, null,
            react_1.default.createElement(HomeInfo_1.default, null,
                react_1.default.createElement(MainTitle_1.default, null, "ReactJS 16.3+ Bootstrap 4"),
                react_1.default.createElement("h2", null,
                    "with Hot Reload (",
                    react_1.default.createElement("i", null, "react-hot-loader 4+"),
                    ")!!!"),
                react_1.default.createElement("h2", null, "and React Router v4"),
                react_1.default.createElement("h2", null, "and webpack 4.x"),
                react_1.default.createElement("h2", null,
                    "and styled-components (",
                    react_1.default.createElement(LightNote_1.default, null, "so keep using SCSS like styles and benefit performant css-in-js"),
                    ")"),
                react_1.default.createElement("h1", null, "Starter"),
                react_1.default.createElement("p", null,
                    react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-success btn-lg", to: '/about' },
                        react_1.default.createElement("i", { className: "fa fa-info" }),
                        "\u00A0 go to about"))))));
}
Home.displayName = 'Home';
exports.default = Home;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/Home.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/Home.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/home/index.ts":
/*!***************************************!*\
  !*** ./src/front/pages/home/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var Home_1 = __importDefault(__webpack_require__(/*! ./Home */ "./src/front/pages/home/Home.tsx"));
var mapStateToProps = function (state) {
    return {};
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({}, dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps))(Home_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/pages/home/styled/HomeInfo.tsx":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/HomeInfo.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var HomeInfo = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.default = HomeInfo;
var templateObject_1;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/styled/HomeInfo.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/styled/HomeInfo.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/home/styled/LightNote.tsx":
/*!***************************************************!*\
  !*** ./src/front/pages/home/styled/LightNote.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var LightNote = styled_components_1.default.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 0.7em;\n"], ["\n  font-size: 0.7em;\n"])));
exports.default = LightNote;
var templateObject_1;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/styled/LightNote.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/styled/LightNote.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/home/styled/MainTitle.ts":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/MainTitle.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var MainTitle = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #222 !important;\n  font-weight: 800;\n"], ["\n  color: #222 !important;\n  font-weight: 800;\n"])));
exports.default = MainTitle;
var templateObject_1;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/styled/MainTitle.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/home/styled/MainTitle.ts"); } })(); 

/***/ }),

/***/ "./src/front/pages/login/Login.tsx":
/*!*****************************************!*\
  !*** ./src/front/pages/login/Login.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Button_1 = __importDefault(__webpack_require__(/*! reactstrap/lib/Button */ "./node_modules/reactstrap/lib/Button.js"));
var Row_1 = __importDefault(__webpack_require__(/*! reactstrap/lib/Row */ "./node_modules/reactstrap/lib/Row.js"));
var Col_1 = __importDefault(__webpack_require__(/*! reactstrap/lib/Col */ "./node_modules/reactstrap/lib/Col.js"));
var auth_1 = __importDefault(__webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.ts"));
var fadeInEntrance_1 = __importDefault(__webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.ts"));
function Login(_a) {
    var _this = this;
    var isLogging = _a.isLogging, isFetching = _a.isFetching, disconnectUser = _a.disconnectUser, logUserIfNeeded = _a.logUserIfNeeded, history = _a.history;
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    react_1.useEffect(function () {
        disconnectUser();
    }, []);
    var handlesOnEmailChange = function (event) {
        if (event) {
            event.preventDefault();
            setEmail(event.target.value.trim());
        }
    };
    var handlesOnPasswordChange = function (event) {
        if (event) {
            event.preventDefault();
            setPassword(event.target.value.trim());
        }
    };
    var handlesOnLogin = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var userLogin, response, _a, token, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event && event.preventDefault();
                    userLogin = {
                        login: email,
                        password: password,
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4, logUserIfNeeded(email, password)];
                case 2:
                    response = _b.sent();
                    console.log('"response: ', response);
                    _a = response.payload.data, token = _a.token, user = _a.user;
                    auth_1.default.setToken(token);
                    auth_1.default.setUserInfo(user);
                    history.push({ pathname: '/' });
                    return [3, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log('login went wrong..., error: ', error_1);
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); };
    var goHome = function (event) {
        event && event.preventDefault();
        history.push({ pathname: '/' });
    };
    return (react_1.default.createElement(fadeInEntrance_1.default, null,
        react_1.default.createElement("div", { className: "content" },
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(Col_1.default, { md: { size: 4, offset: 4 }, xs: { size: 10, offset: 1 } },
                    react_1.default.createElement("form", { className: "form-horizontal", noValidate: true },
                        react_1.default.createElement("fieldset", null,
                            react_1.default.createElement("legend", null, "Login"),
                            react_1.default.createElement("div", { className: "form-group" },
                                react_1.default.createElement("label", { htmlFor: "inputEmail", className: "col-lg-2 control-label" }, "Email"),
                                react_1.default.createElement(Col_1.default, { lg: 12 },
                                    react_1.default.createElement("input", { type: "text", className: "form-control", id: "inputEmail", placeholder: "Email", autoComplete: "username email", value: email, onChange: handlesOnEmailChange }))),
                            react_1.default.createElement("div", { className: "form-group" },
                                react_1.default.createElement("label", { htmlFor: "inputPassword", className: "col-lg-2 control-label" }, "Password"),
                                react_1.default.createElement(Col_1.default, { lg: 12 },
                                    react_1.default.createElement("input", { type: "password", className: "form-control", id: "inputPassword", placeholder: "Password", autoComplete: "current-password", value: password, onChange: handlesOnPasswordChange }))),
                            react_1.default.createElement("div", { className: "form-group" },
                                react_1.default.createElement(Col_1.default, { lg: { size: 12 } },
                                    react_1.default.createElement(Button_1.default, { className: "login-button btn-block", color: "primary", disabled: isLogging, onClick: handlesOnLogin }, isLogging ? (react_1.default.createElement("span", null,
                                        "login in... \u00A0",
                                        react_1.default.createElement("i", { className: "fa fa-spinner fa-pulse fa-fw" }))) : (react_1.default.createElement("span", null, "Login"))))))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(Col_1.default, { md: { size: 4, offset: 4 }, xs: { size: 10, offset: 1 } },
                    react_1.default.createElement("div", { className: "pull-right" },
                        react_1.default.createElement(Button_1.default, { className: "btn-block", onClick: goHome }, "back to home")))))));
}
Login.defaultProps = {
    isFetching: false,
    isLogging: false,
};
Login.displayName = 'Login';
exports.default = Login;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/login/Login.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/login/Login.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/login/index.ts":
/*!****************************************!*\
  !*** ./src/front/pages/login/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var userAuthActions = __importStar(__webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.ts"));
var Login_1 = __importDefault(__webpack_require__(/*! ./Login */ "./src/front/pages/login/Login.tsx"));
var mapStateToProps = function (state, ownProps) {
    return {
        isAuthenticated: state.userAuth.isAuthenticated,
        isFetching: state.userAuth.isFetching,
        isLogging: state.userAuth.isLogging,
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(__assign({}, userAuthActions), dispatch);
};
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps))(Login_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/login/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/login/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/pages/pageNotFound/PageNotFound.tsx":
/*!*******************************************************!*\
  !*** ./src/front/pages/pageNotFound/PageNotFound.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Jumbotron_1 = __importDefault(__webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js"));
var fadeInEntrance_1 = __importDefault(__webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.ts"));
function PageNotFound(props) {
    return (react_1.default.createElement(fadeInEntrance_1.default, null,
        react_1.default.createElement(Jumbotron_1.default, null,
            react_1.default.createElement("h1", null, "Sorry this page does not exists..."))));
}
PageNotFound.displayName = 'PageNotFound';
exports.default = PageNotFound;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/pageNotFound/PageNotFound.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/pageNotFound/PageNotFound.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/pageNotFound/index.ts":
/*!***********************************************!*\
  !*** ./src/front/pages/pageNotFound/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var PageNotFound_1 = __importDefault(__webpack_require__(/*! ./PageNotFound */ "./src/front/pages/pageNotFound/PageNotFound.tsx"));
exports.default = redux_1.compose()(PageNotFound_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/pageNotFound/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/pageNotFound/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/pages/protected/Protected.tsx":
/*!*************************************************!*\
  !*** ./src/front/pages/protected/Protected.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fadeInEntrance_1 = __importDefault(__webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.ts"));
function Protected(props) {
    return (react_1.default.createElement(fadeInEntrance_1.default, null,
        react_1.default.createElement("h1", null, "Protected view"),
        react_1.default.createElement("h3", null, "If you can read, it means you are authenticated")));
}
Protected.displayName = 'Protected';
exports.default = Protected;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/protected/Protected.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/protected/Protected.tsx"); } })(); 

/***/ }),

/***/ "./src/front/pages/protected/index.ts":
/*!********************************************!*\
  !*** ./src/front/pages/protected/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var Protected_1 = __importDefault(__webpack_require__(/*! ./Protected */ "./src/front/pages/protected/Protected.tsx"));
exports.default = redux_1.compose()(Protected_1.default);


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/protected/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/pages/protected/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/redux/middleware/fetchMiddleware.ts":
/*!*******************************************************!*\
  !*** ./src/front/redux/middleware/fetchMiddleware.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
exports.FETCH_MOCK = 'FETCH_MOCK';
exports.FETCH = 'FETCH';
var FETCH_TYPE_ENUM;
(function (FETCH_TYPE_ENUM) {
    FETCH_TYPE_ENUM["FETCH"] = "FETCH";
    FETCH_TYPE_ENUM["FETCH_MOCK"] = "FETCH_MOCK";
})(FETCH_TYPE_ENUM = exports.FETCH_TYPE_ENUM || (exports.FETCH_TYPE_ENUM = {}));
var fetchMiddleware = function (store) { return function (next) { return function (action) { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, request, success, mockResult, _c, _d, request, success, fail_1, url, method, headers, options, data, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!action.fetch) {
                    return [2, next(action)];
                }
                if (!action.fetch.type) {
                    return [2, next(action)];
                }
                if (action.fetch.type !== 'FETCH_MOCK' ||
                    action.fetch.type !== 'FETCH') {
                    return [2, next(action)];
                }
                if (!action.fetch.actionTypes) {
                    return [2, next(action)];
                }
                if (action.fetch.type === "FETCH_MOCK") {
                    if (!action.fetch.mockResult) {
                        throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
                    }
                    _a = action.fetch, _b = _a.actionTypes, request = _b.request, success = _b.success, mockResult = _a.mockResult;
                    store.dispatch({ type: request });
                    return [2, Promise.resolve(store.dispatch({
                            type: success,
                            payload: {
                                status: 200,
                                data: mockResult,
                            },
                        }))];
                }
                if (!(action.fetch.type === 'FETCH')) return [3, 4];
                _c = action.fetch, _d = _c.actionTypes, request = _d.request, success = _d.success, fail_1 = _d.fail, url = _c.url, method = _c.method, headers = _c.headers, options = _c.options;
                store.dispatch({ type: request });
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 4]);
                return [4, axios_1.default
                        .request(__assign({ method: method,
                        url: url, withCredentials: true, headers: __assign({ Accept: 'application/json', 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*' }, headers) }, options))];
            case 2:
                data = _e.sent();
                store.dispatch({ type: success, payload: data });
                return [2, data];
            case 3:
                error_1 = _e.sent();
                store.dispatch({ type: fail_1, error: error_1.response });
                throw error_1;
            case 4: return [2, next(action)];
        }
    });
}); }; }; };
exports.default = fetchMiddleware;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/middleware/fetchMiddleware.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/middleware/fetchMiddleware.ts"); } })(); 

/***/ }),

/***/ "./src/front/redux/modules/fakeModuleWithFetch/index.ts":
/*!**************************************************************!*\
  !*** ./src/front/redux/modules/fakeModuleWithFetch/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
var fakeAPI_json_1 = __importDefault(__webpack_require__(/*! ../../../mock/fakeAPI.json */ "./src/front/mock/fakeAPI.json"));
var appConfig_1 = __importDefault(__webpack_require__(/*! ../../../config/appConfig */ "./src/front/config/appConfig.ts"));
var fetchTools_1 = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/front/services/API/fetchTools.ts");
var REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
var RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
var ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH';
var initialState = {
    isFetching: false,
    actionTime: '',
    data: [],
    error: {},
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    var currentTime = date_fns_1.format(new Date());
    switch (action.type) {
        case REQUEST_FAKE_FETCH: {
            return __assign({}, state, { actionTime: currentTime, isFetching: true });
        }
        case RECEIVED_FAKE_FETCH: {
            var _a = action.payload, payload = _a === void 0 ? [] : _a;
            return __assign({}, state, { actionTime: currentTime, isFetching: false, data: payload.slice() });
        }
        case ERROR_FAKE_FETCH: {
            var _b = action.error, error = _b === void 0 ? {} : _b;
            return __assign({}, state, { actionTime: currentTime, isFetching: false, error: __assign({}, error) });
        }
        default:
            return state;
    }
}
exports.default = default_1;
function fakeFetch() {
    return function (dispatch) {
        var shouldFetchMock = appConfig_1.default.DEV_MODE;
        var fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
        var mockResult = fakeAPI_json_1.default;
        var url = fetchTools_1.getLocationOrigin() + "/" + appConfig_1.default.api.fakeEndPoint;
        var method = 'get';
        var options = {};
        var type = 'FETCH';
        return Promise.resolve(dispatch({
            type: type,
            fetch: {
                type: fetchType,
                actionTypes: {
                    request: REQUEST_FAKE_FETCH,
                    success: RECEIVED_FAKE_FETCH,
                    fail: ERROR_FAKE_FETCH,
                },
                mockResult: mockResult,
                url: url,
                method: method,
                options: options,
            },
        }));
    };
}
function fakeFetchIfNeeded() {
    return function (dispatch, getState) {
        if (shouldFakeFetch(getState())) {
            return dispatch(fakeFetch());
        }
        return Promise.resolve();
    };
}
exports.fakeFetchIfNeeded = fakeFetchIfNeeded;
function shouldFakeFetch(state) {
    var isFetching = state.fakeModuleWithFetch.isFetching;
    return !isFetching;
}


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/modules/fakeModuleWithFetch/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/modules/fakeModuleWithFetch/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/redux/modules/reducers.ts":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/reducers.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var fakeModuleWithFetch_1 = __importDefault(__webpack_require__(/*! ./fakeModuleWithFetch */ "./src/front/redux/modules/fakeModuleWithFetch/index.ts"));
var userAuth_1 = __importDefault(__webpack_require__(/*! ./userAuth */ "./src/front/redux/modules/userAuth/index.ts"));
exports.reducers = {
    fakeModuleWithFetch: fakeModuleWithFetch_1.default,
    userAuth: userAuth_1.default,
};
exports.default = redux_1.combineReducers(__assign({}, exports.reducers));


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/modules/reducers.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/modules/reducers.ts"); } })(); 

/***/ }),

/***/ "./src/front/redux/modules/userAuth/index.ts":
/*!***************************************************!*\
  !*** ./src/front/redux/modules/userAuth/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appConfig_1 = __importDefault(__webpack_require__(/*! ../../../config/appConfig */ "./src/front/config/appConfig.ts"));
var userInfosMock_json_1 = __importDefault(__webpack_require__(/*! ../../../mock/userInfosMock.json */ "./src/front/mock/userInfosMock.json"));
var fetchTools_1 = __webpack_require__(/*! ../../../services/API/fetchTools */ "./src/front/services/API/fetchTools.ts");
var auth_1 = __importDefault(__webpack_require__(/*! ../../../services/auth */ "./src/front/services/auth/index.ts"));
var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';
var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';
var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';
var DISCONNECT_USER = 'DISCONNECT_USER';
var initialState = {
    isFetching: false,
    isLogging: false,
    id: '',
    login: '',
    firstname: '',
    lastname: '',
    token: '',
    isAuthenticated: false,
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CHECK_IF_USER_IS_AUTHENTICATED: {
            var _a = action.isAuthenticated, isAuthenticated = _a === void 0 ? false : _a, _b = action.token, token = _b === void 0 ? '' : _b, _c = action.user, user = _c === void 0 ? { id: '', login: '', firstname: '', lastname: '' } : _c;
            return __assign({}, state, { isAuthenticated: isAuthenticated,
                token: token, id: user.id, login: user.login, firstname: user.firstname, lastname: user.lastname });
        }
        case DISCONNECT_USER: {
            return __assign({}, state, { isAuthenticated: false, token: initialState.token, id: initialState.id, login: initialState.login, firstname: initialState.firstname, lastname: initialState.lastname });
        }
        case REQUEST_LOG_USER: {
            return __assign({}, state, { isLogging: true });
        }
        case RECEIVED_LOG_USER: {
            var _d = action.payload.data, _e = _d.token, token = _e === void 0 ? '' : _e, _f = _d.id, id = _f === void 0 ? '' : _f, _g = _d.login, login = _g === void 0 ? '' : _g, _h = _d.firstname, firstname = _h === void 0 ? '' : _h, _j = _d.lastname, lastname = _j === void 0 ? '' : _j;
            return __assign({}, state, { isAuthenticated: true, token: token, id: id, login: login, firstname: firstname, lastname: lastname, isLogging: false });
        }
        case ERROR_LOG_USER: {
            return __assign({}, state, { isAuthenticated: false, isLogging: false });
        }
        case REQUEST_USER_INFOS_DATA: {
            return __assign({}, state, { isFetching: true });
        }
        case RECEIVED_USER_INFOS_DATA: {
            var _k = action.payload.data.userInfos, userInfos = _k === void 0 ? { id: '', login: '', firstname: '', lastname: '' } : _k;
            return __assign({}, state, { isFetching: false, id: userInfos.id, login: userInfos.login, firstname: userInfos.firstname, lastname: userInfos.lastname });
        }
        case ERROR_USER_INFOS_DATA: {
            return __assign({}, state, { isFetching: false });
        }
        default:
            return state;
    }
}
exports.default = default_1;
function disconnectUser() {
    auth_1.default.clearAllAppStorage();
    return { type: 'DISCONNECT_USER' };
}
exports.disconnectUser = disconnectUser;
function checkUserIsConnected() {
    var token = auth_1.default.getToken();
    var user = auth_1.default.getUserInfo();
    var checkUserHasId = function (obj) { return obj && (obj.id || false); };
    var isExpired = auth_1.default.isExpiredToken(token);
    var isAuthenticated = token && checkUserHasId(user) ? true : false;
    return __assign({ type: CHECK_IF_USER_IS_AUTHENTICATED, token: token }, user, { isAuthenticated: isAuthenticated && !isExpired });
}
exports.checkUserIsConnected = checkUserIsConnected;
function logUser(login, password) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var FETCH_TYPE, __SOME_LOGIN_API__, mockResult, url, method, headers, options, type;
        return __generator(this, function (_a) {
            FETCH_TYPE = appConfig_1.default.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
            __SOME_LOGIN_API__ = 'login';
            mockResult = userInfosMock_json_1.default;
            url = fetchTools_1.getLocationOrigin() + "/" + __SOME_LOGIN_API__;
            method = 'post';
            headers = {};
            options = {
                credentials: 'same-origin',
                data: {
                    login: login,
                    password: password,
                },
            };
            type = 'FETCH';
            return [2, dispatch({
                    type: type,
                    fetch: {
                        type: FETCH_TYPE,
                        actionTypes: {
                            request: REQUEST_LOG_USER,
                            success: RECEIVED_LOG_USER,
                            fail: ERROR_LOG_USER,
                        },
                        mockResult: mockResult,
                        url: url,
                        method: method,
                        headers: headers,
                        options: options,
                    },
                })];
        });
    }); };
}
function logUserIfNeeded(email, password) {
    return function (dispatch, getState) {
        if (shouldLogUser(getState())) {
            return dispatch(logUser(email, password));
        }
        return Promise.resolve();
    };
}
exports.logUserIfNeeded = logUserIfNeeded;
function shouldLogUser(state) {
    var isLogging = state.userAuth.isLogging;
    return !isLogging;
}
function fetchUserInfosData(id) {
    var _this = this;
    if (id === void 0) { id = ''; }
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var token, DEV_MODE, users, FETCH_TYPE, mockResult, url, method, headers, options, type;
        return __generator(this, function (_a) {
            token = auth_1.default.getToken();
            DEV_MODE = appConfig_1.default.DEV_MODE, users = appConfig_1.default.api.users;
            FETCH_TYPE = DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
            mockResult = userInfosMock_json_1.default;
            url = fetchTools_1.getLocationOrigin() + "/" + users + "/" + id;
            method = 'get';
            headers = { authorization: "Bearer " + (token || '') };
            options = { credentials: 'same-origin' };
            type = 'FETCH';
            return [2, dispatch({
                    type: type,
                    fetch: {
                        type: FETCH_TYPE,
                        actionTypes: {
                            request: REQUEST_USER_INFOS_DATA,
                            success: RECEIVED_USER_INFOS_DATA,
                            fail: ERROR_USER_INFOS_DATA,
                        },
                        mockResult: mockResult,
                        url: url,
                        method: method,
                        headers: headers,
                        options: options,
                    },
                })];
        });
    }); };
}
function fetchUserInfoDataIfNeeded(id) {
    if (id === void 0) { id = ''; }
    return function (dispatch, getState) {
        if (shouldFetchUserInfoData(getState())) {
            return dispatch(fetchUserInfosData(id));
        }
        return Promise.resolve();
    };
}
exports.fetchUserInfoDataIfNeeded = fetchUserInfoDataIfNeeded;
function shouldFetchUserInfoData(state) {
    var isFetching = state.userAuth.isFetching;
    return !isFetching;
}


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/modules/userAuth/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/modules/userAuth/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/redux/store/configureStore.ts":
/*!*************************************************!*\
  !*** ./src/front/redux/store/configureStore.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
var history_1 = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
var redux_persist_1 = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
var storage_1 = __importDefault(__webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js"));
var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
var redux_logger_1 = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
var reducers_1 = __importDefault(__webpack_require__(/*! ../modules/reducers */ "./src/front/redux/modules/reducers.ts"));
var fetchMiddleware_1 = __importDefault(__webpack_require__(/*! ../middleware/fetchMiddleware */ "./src/front/redux/middleware/fetchMiddleware.ts"));
var isProd = "dev" === 'production';
exports.history = history_1.createBrowserHistory();
var loggerMiddleware = redux_logger_1.createLogger({
    level: 'info',
    collapsed: true,
});
var enhancer = !isProd
    ? redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, connected_react_router_1.routerMiddleware(exports.history), fetchMiddleware_1.default, loggerMiddleware))
    : redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, fetchMiddleware_1.default, connected_react_router_1.routerMiddleware(exports.history)));
var persistConfig = {
    key: 'root',
    storage: storage_1.default,
    blacklist: ['router'],
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, connected_react_router_1.connectRouter(exports.history)(reducers_1.default));
function configureStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var store = redux_1.createStore(persistedReducer, initialState, enhancer);
    var persistor = redux_persist_1.persistStore(store);
    return { store: store, persistor: persistor };
}
exports.default = configureStore;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/store/configureStore.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/redux/store/configureStore.ts"); } })(); 

/***/ }),

/***/ "./src/front/routes/MainRoutes.tsx":
/*!*****************************************!*\
  !*** ./src/front/routes/MainRoutes.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var routes_1 = __webpack_require__(/*! ./routes */ "./src/front/routes/routes.ts");
var logoutRoute_1 = __importDefault(__webpack_require__(/*! ../components/logoutRoute */ "./src/front/components/logoutRoute/index.ts"));
var privateRoute_1 = __importDefault(__webpack_require__(/*! ../components/privateRoute */ "./src/front/components/privateRoute/index.ts"));
var MainRoutes = function () {
    return (react_1.default.createElement(react_router_1.Switch, null,
        react_1.default.createElement(react_router_1.Route, { exact: true, path: "/", component: routes_1.Home }),
        react_1.default.createElement(react_router_1.Route, { path: "/about", component: routes_1.About }),
        react_1.default.createElement(privateRoute_1.default, { path: "/protected", component: routes_1.Protected }),
        react_1.default.createElement(react_router_1.Route, { exact: true, path: "/login", component: routes_1.Login }),
        react_1.default.createElement(logoutRoute_1.default, { path: "/logout" }),
        react_1.default.createElement(react_router_1.Route, { path: "*", component: routes_1.PageNotFound })));
};
exports.default = MainRoutes;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/routes/MainRoutes.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/routes/MainRoutes.tsx"); } })(); 

/***/ }),

/***/ "./src/front/routes/routes.ts":
/*!************************************!*\
  !*** ./src/front/routes/routes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadable_components_1 = __importDefault(__webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js"));
exports.Home = loadable_components_1.default(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../pages/home */ "./src/front/pages/home/index.ts")); }); });
exports.About = loadable_components_1.default(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../pages/about */ "./src/front/pages/about/index.ts")); }); });
exports.Login = loadable_components_1.default(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../pages/login */ "./src/front/pages/login/index.ts")); }); });
exports.Protected = loadable_components_1.default(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../pages/protected */ "./src/front/pages/protected/index.ts")); }); });
exports.PageNotFound = loadable_components_1.default(function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../pages/pageNotFound */ "./src/front/pages/pageNotFound/index.ts")); }); });
exports.PrivateRoute = loadable_components_1.default(function () {
    return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ../components/privateRoute/PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.tsx")); });
});


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/routes/routes.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/routes/routes.ts"); } })(); 

/***/ }),

/***/ "./src/front/services/API/fetchTools.ts":
/*!**********************************************!*\
  !*** ./src/front/services/API/fetchTools.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var js_base64_1 = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
exports.getLocationOrigin = function () {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return window.location.origin;
};
exports.getMethod = {
    method: 'get',
};
exports.postMethod = {
    method: 'post',
};
exports.defaultOptions = {
    credentials: 'same-origin',
};
exports.jsonHeader = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
exports.encodeBase64 = function (stringToEncode) {
    if (stringToEncode === void 0) { stringToEncode = ''; }
    return js_base64_1.Base64.encode(stringToEncode);
};


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/services/API/fetchTools.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/services/API/fetchTools.ts"); } })(); 

/***/ }),

/***/ "./src/front/services/auth/index.ts":
/*!******************************************!*\
  !*** ./src/front/services/auth/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = __importDefault(__webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js"));
var is_after_1 = __importDefault(__webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js"));
var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';
var APP_PERSIST_STORES_TYPES = [
    'localStorage',
    'sessionStorage',
];
var parse = JSON.parse;
var stringify = JSON.stringify;
exports.auth = {
    getToken: function (fromStorage, tokenKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            return (localStorage && localStorage.getItem(tokenKey)) || null;
        }
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
        }
        return null;
    },
    setToken: function (value, toStorage, tokenKey) {
        if (value === void 0) { value = ''; }
        if (toStorage === void 0) { toStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (!value || value.length <= 0) {
            return;
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(tokenKey, value);
                return;
            }
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(tokenKey, value);
                return;
            }
        }
    },
    isAuthenticated: function (fromStorage, tokenKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage && localStorage.getItem(tokenKey)) {
                return true;
            }
            return false;
        }
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage && sessionStorage.getItem(tokenKey)) {
                return true;
            }
            return false;
        }
        return false;
    },
    clearToken: function (storage, tokenKey) {
        if (storage === void 0) { storage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (localStorage && localStorage[tokenKey]) {
            localStorage.removeItem(tokenKey);
            return true;
        }
        if (sessionStorage && sessionStorage[tokenKey]) {
            sessionStorage.removeItem(tokenKey);
            return true;
        }
        return false;
    },
    getTokenExpirationDate: function (encodedToken) {
        if (!encodedToken) {
            return new Date(0);
        }
        var token = jwt_decode_1.default(encodedToken);
        if (!token.exp) {
            return new Date(0);
        }
        var expirationDate = new Date(token.exp * 1000);
        return expirationDate;
    },
    isExpiredToken: function (encodedToken) {
        var expirationDate = this.getTokenExpirationDate(encodedToken);
        var rightNow = new Date();
        var isExpiredToken = is_after_1.default(rightNow, expirationDate);
        return isExpiredToken;
    },
    getUserInfo: function (fromStorage, userInfoKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            try {
                return ((window &&
                    localStorage &&
                    parse(localStorage.getItem(userInfoKey) || '')) ||
                    null);
            }
            catch (error) {
                return null;
            }
        }
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            try {
                return ((window &&
                    sessionStorage &&
                    parse(sessionStorage.getItem(userInfoKey) || '')) ||
                    null);
            }
            catch (error) {
                return null;
            }
        }
        return null;
    },
    setUserInfo: function (value, toStorage, userInfoKey) {
        if (value === void 0) { value = ''; }
        if (toStorage === void 0) { toStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (!value || value.length <= 0) {
            return;
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(userInfoKey, stringify(value));
                return;
            }
        }
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(userInfoKey, stringify(value));
                return;
            }
        }
    },
    clearUserInfo: function (userInfoKey) {
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (localStorage && localStorage[userInfoKey]) {
            localStorage.removeItem(userInfoKey);
            return;
        }
        if (sessionStorage && sessionStorage[userInfoKey]) {
            sessionStorage.removeItem(userInfoKey);
            return;
        }
    },
    clearAllAppStorage: function () {
        if (localStorage) {
            localStorage.clear();
            return;
        }
        if (sessionStorage) {
            sessionStorage.clear();
            return;
        }
    },
};
exports.default = exports.auth;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/services/auth/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/services/auth/index.ts"); } })(); 

/***/ }),

/***/ "./src/front/services/sw/registerServiceWorker.ts":
/*!********************************************************!*\
  !*** ./src/front/services/sw/registerServiceWorker.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appConfig_1 = __importDefault(__webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.ts"));
var swPath = appConfig_1.default.sw.path;
function registerServiceWorker() {
    var _this = this;
    if (typeof window !== undefined) {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () { return __awaiter(_this, void 0, void 0, function () {
                var registration, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, navigator.serviceWorker.register(swPath)];
                        case 1:
                            registration = _a.sent();
                            console.log('SW registered: ', registration);
                            return [3, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log('SW registration failed: ', error_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        }
    }
}
exports.default = registerServiceWorker;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/services/sw/registerServiceWorker.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/services/sw/registerServiceWorker.ts"); } })(); 

/***/ }),

/***/ "./src/front/style/GlobalStyles.ts":
/*!*****************************************!*\
  !*** ./src/front/style/GlobalStyles.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"], ["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"])));
exports.default = GlobalStyle;
var templateObject_1;


; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/style/GlobalStyles.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/mackentoch/GitProjects/react-redux-bootstrap-webpack-starter/src/front/style/GlobalStyles.ts"); } })(); 

/***/ })

/******/ });
//# sourceMappingURL=app.66cf673a778c8bf23dd5.js.map