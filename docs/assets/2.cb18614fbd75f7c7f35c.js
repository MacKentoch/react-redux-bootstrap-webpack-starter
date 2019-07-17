(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./src/front/pages/login/Login.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap/lib/Button */ "./node_modules/reactstrap/lib/Button.js");
/* harmony import */ var reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/lib/Row */ "./node_modules/reactstrap/lib/Row.js");
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/lib/Col */ "./node_modules/reactstrap/lib/Col.js");
/* harmony import */ var reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _components_fadeInEntrance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/fadeInEntrance */ "./src/front/components/fadeInEntrance/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // #region flow types

// #endregion
function Login(_ref) {
  var isLogging = _ref.isLogging,
      isFetching = _ref.isFetching,
      disconnectUser = _ref.disconnectUser,
      logUserIfNeeded = _ref.logUserIfNeeded,
      history = _ref.history;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // on mount disconnect (clear previous user auth and info):
    disconnectUser();
  }, []); // #region form inputs change callbacks

  var handlesOnEmailChange = function handlesOnEmailChange(event) {
    if (event) {
      event.preventDefault(); // $FlowIgnore

      setEmail(event.target.value.trim());
    }
  };

  var handlesOnPasswordChange = function handlesOnPasswordChange(event) {
    if (event) {
      event.preventDefault(); // $FlowIgnore

      setPassword(event.target.value.trim());
    }
  }; // #endregion
  // #region on login button click callback


  var handlesOnLogin =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var userLogin, response, _response$payload$dat, token, user;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event && event.preventDefault();
              userLogin = {
                login: email,
                password: password
              };
              _context.prev = 2;
              _context.next = 5;
              return logUserIfNeeded(userLogin);

            case 5:
              response = _context.sent;
              _response$payload$dat = response.payload.data, token = _response$payload$dat.token, user = _response$payload$dat.user;
              _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].setToken(token);
              _services_auth__WEBPACK_IMPORTED_MODULE_4__["default"].setUserInfo(user);
              history.push({
                pathname: '/'
              }); // back to Home

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);

              /* eslint-disable no-console */
              console.log('login went wrong..., error: ', _context.t0);
              /* eslint-enable no-console */

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function handlesOnLogin(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // #endregion
  // #region on go back home button click callback


  var goHome = function goHome(event) {
    event && event.preventDefault();
    history.push({
      pathname: '/'
    });
  }; // #endregion


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_fadeInEntrance__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    md: {
      size: 4,
      offset: 4
    },
    xs: {
      size: 10,
      offset: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", null, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputEmail",
    className: "col-lg-2 control-label"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputEmail",
    placeholder: "Email",
    autoComplete: "username email",
    value: email,
    onChange: handlesOnEmailChange
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputPassword",
    className: "col-lg-2 control-label"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "inputPassword",
    placeholder: "Password",
    autoComplete: "current-password",
    value: password,
    onChange: handlesOnPasswordChange
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: {
      size: 12
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "login-button btn-block",
    color: "primary",
    disabled: isLogging,
    onClick: handlesOnLogin
  }, isLogging ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "login in... \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-spinner fa-pulse fa-fw"
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Login")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    md: {
      size: 4,
      offset: 4
    },
    xs: {
      size: 10,
      offset: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "btn-block",
    onClick: goHome
  }, "back to home"))))));
}

Login.defaultProps = {
  isFetching: false,
  isLogging: false
};
Login.displayName = 'Login';
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/front/pages/login/index.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/front/pages/login/Login.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // #region redux map state and dispatch to props

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(_objectSpread({}, _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_2__), dispatch);
}; // #endregion


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])( // $FlowIgnore
Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps))(_Login__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

}]);
//# sourceMappingURL=2.cb18614fbd75f7c7f35c.js.map