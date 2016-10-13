'use strict';
module.exports = function (gulp, opts) {
    return function (callback) {
        var del = require('del');
        return del([opts.dist], {'force': true}, callback);
    };
};