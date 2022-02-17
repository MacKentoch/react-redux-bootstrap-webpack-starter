"use strict";
exports.__esModule = true;
exports.error500 = exports.error404 = void 0;
var error404 = function (req, res, next) {
    console.log('req.url: ', req.url);
    var err = new Error('Not found');
    err.status = 404;
    next(err);
};
exports.error404 = error404;
var error500 = function (err, req, res, next) {
    if (err.status === 404) {
        res.status(404).send('Sorry nothing here for now...');
    }
    console.error(err);
    res.status(500).send('internal server error');
};
exports.error500 = error500;
