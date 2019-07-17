(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/front/components/fadeInEntrance/FadeInEntrance.js":
/*!***************************************************************!*\
  !*** ./src/front/components/fadeInEntrance/FadeInEntrance.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_FadeInDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled/FadeInDiv */ "./src/front/components/fadeInEntrance/styled/FadeInDiv.js");

 // #region types

// #endregion
function FadeInEntrance(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_FadeInDiv__WEBPACK_IMPORTED_MODULE_1__["default"], {
    startAnimation: true
  }, children);
}

FadeInEntrance.displayName = 'FadeInEntrance';
/* harmony default export */ __webpack_exports__["default"] = (FadeInEntrance);

/***/ }),

/***/ "./src/front/components/fadeInEntrance/index.js":
/*!******************************************************!*\
  !*** ./src/front/components/fadeInEntrance/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FadeInEntrance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FadeInEntrance */ "./src/front/components/fadeInEntrance/FadeInEntrance.js");

/* harmony default export */ __webpack_exports__["default"] = (_FadeInEntrance__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/components/fadeInEntrance/styled/FadeInDiv.js":
/*!*****************************************************************!*\
  !*** ./src/front/components/fadeInEntrance/styled/FadeInDiv.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  animation-name: ", ";\n  animation-timing-function: ease-in;\n  animation-duration: 0.7s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var fadeInAnimationCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), fadeIn);
var FadeInDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3(), function (_ref) {
  var startAnimation = _ref.startAnimation;
  return startAnimation && fadeInAnimationCss;
});
/* harmony default export */ __webpack_exports__["default"] = (FadeInDiv);

/***/ }),

/***/ "./src/front/pages/home/Home.js":
/*!**************************************!*\
  !*** ./src/front/pages/home/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_fadeInEntrance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.js");
/* harmony import */ var _styled_HomeInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/HomeInfo */ "./src/front/pages/home/styled/HomeInfo.js");
/* harmony import */ var _styled_MainTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled/MainTitle */ "./src/front/pages/home/styled/MainTitle.js");
/* harmony import */ var _styled_LightNote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled/LightNote */ "./src/front/pages/home/styled/LightNote.js");






 // #region flow types

// #endregion
function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_fadeInEntrance__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_HomeInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_MainTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null, "ReactJS 16.3+ Bootstrap 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "with Hot Reload (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "react-hot-loader 4+"), ")!!!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and React Router v4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and webpack 4.x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and styled-components (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_LightNote__WEBPACK_IMPORTED_MODULE_6__["default"], null, "so keep using SCSS like styles and benefit performant css-in-js"), ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Starter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "btn btn-success btn-lg",
    to: '/about'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-info"
  }), "\xA0 go to about")))));
}

Home.displayName = 'Home';
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/front/pages/home/index.js":
/*!***************************************!*\
  !*** ./src/front/pages/home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/front/pages/home/Home.js");


 // #region redux map state and dispatch to props

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({}, dispatch);
}; // #endregion


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])( // $FlowIgnore
Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps))(_Home__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/front/pages/home/styled/HomeInfo.js":
/*!*************************************************!*\
  !*** ./src/front/pages/home/styled/HomeInfo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HomeInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);

/***/ }),

/***/ "./src/front/pages/home/styled/LightNote.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/LightNote.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.7em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LightNote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].i(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (LightNote);

/***/ }),

/***/ "./src/front/pages/home/styled/MainTitle.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/MainTitle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #222 !important;\n  font-weight: 800;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (MainTitle);

/***/ })

}]);
//# sourceMappingURL=0.cb18614fbd75f7c7f35c.js.map