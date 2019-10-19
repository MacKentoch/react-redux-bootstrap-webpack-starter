"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var chalk_1 = require("chalk");
var errors_1 = require("../middleware/errors");
// #region constants
var DOCS_PATH = '../../../docs/';
var port = process.env.PORT || 8082;
var host = process.env.SERVER_HOST || 'localhost';
// #endregion
var expressServer = function (app, isDev) {
    if (isDev === void 0) { isDev = false; }
    if (!app) {
        console.log('Server application instance is undefined');
        throw new Error('Server application instance is undefined');
    }
    app.set('port', port);
    app.set('ipAdress', host);
    app.use('/assets', express.static(path.join(__dirname, DOCS_PATH, 'assets/')));
    app.get('/*', function (req, res) {
        return res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html'));
    });
    app.use(errors_1.error404);
    app.use(errors_1.error500);
    /* eslint-disable no-console */
    // @ts-ignore
    app.listen(port, host, function () {
        return console.log("\n        =====================================================\n        -> Server (" + chalk_1["default"].bgBlue('SPA') + ") \uD83C\uDFC3 (running) on " + chalk_1["default"].green(host) + ":" + chalk_1["default"].green("" + port) + "\n        =====================================================\n      ");
    });
    /* eslint-enable no-console */
    return app;
};
exports["default"] = expressServer;
