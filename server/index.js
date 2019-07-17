"use strict";
exports.__esModule = true;
var express = require("express");
var PrettyError = require("pretty-error");
var expressServer_1 = require("./lib/expressServer");
// #region constants
var dev = process.env.NODE_ENV !== 'production';
var pe = new PrettyError();
// #endregion
(function () {
    try {
        pe.start();
        var app = express();
        expressServer_1["default"](app, dev);
    }
    catch (error) {
        console.log('server error: ', error);
    }
})();
