"use strict";
exports.__esModule = true;
var express = require("express");
var PrettyError = require("pretty-error");
var expressServer_1 = require("./lib/expressServer");
var config_1 = require("./config");
// #region constants
var dev = config_1["default"].get('env') !== 'production';
var pe = new PrettyError();
// #endregion
try {
    pe.start();
    var app = express();
    expressServer_1["default"](app, dev);
}
catch (error) {
    console.log('server error: ', error);
}
