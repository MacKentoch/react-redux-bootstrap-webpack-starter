"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var chalk_1 = require("chalk");
var errors_1 = require("../middleware/errors");
var config_1 = require("../config");
// #region constants
var DOCS_PATH = '../../../../docs/';
// #endregion
// $FlowIgnore
var expressServer = function (app, isDev) {
    if (isDev === void 0) { isDev = false; }
    if (!app) {
        console.log('Server application instance is undefined');
        throw new Error('Server application instance is undefined');
    }
    app.set('port', config_1["default"].get('server.port'));
    app.set('ipAdress', config_1["default"].get('server.host'));
    app.use('/assets', express.static(path.join(__dirname, DOCS_PATH, 'assets/')));
    app.get('/*', function (req, res) {
        return res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html'));
    });
    app.use(errors_1.error404);
    app.use(errors_1.error500);
    /* eslint-disable no-console */
    app.listen(config_1["default"].get('server.port'), config_1["default"].get('server.host'), function () {
        return console.log("\n        =====================================================\n        -> Server (" + chalk_1["default"].bgBlue('SPA') + ") \uD83C\uDFC3 (running) on " + chalk_1["default"].green(config_1["default"].get('server.host')) + ":" + chalk_1["default"].green(config_1["default"].get('server.port')) + "\n        =====================================================\n      ");
    });
    /* eslint-enable no-console */
    return app;
};
exports["default"] = expressServer;
