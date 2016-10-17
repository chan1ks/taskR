'use strict';
module.exports = function (gulp, opts) {
    return function (callback) {
        var del = require('del');
        return del([opts.paths.dist], {'force': true}, callback);
    };
};