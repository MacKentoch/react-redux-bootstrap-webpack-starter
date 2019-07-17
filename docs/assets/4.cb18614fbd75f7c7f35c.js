(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./src/front/pages/protected/Protected.js":
/*!************************************************!*\
  !*** ./src/front/pages/protected/Protected.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_fadeInEntrance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.js");

 // #region flow types

// #endregion
function Protected(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_fadeInEntrance__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Protected view"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "If you can read, it means you are authenticated"));
}

Protected.displayName = 'Protected';
/* harmony default export */ __webpack_exports__["default"] = (Protected);

/***/ }),

/***/ "./src/front/pages/protected/index.js":
/*!********************************************!*\
  !*** ./src/front/pages/protected/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Protected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Protected */ "./src/front/pages/protected/Protected.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])()(_Protected__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=4.cb18614fbd75f7c7f35c.js.map