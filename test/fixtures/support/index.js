'use strict';
var assert = require('assert');

exports.chdir = function (dir) {
    var orig = process.cwd();
    process.chdir(dir);

    return function () {
        process.chdir(orig);
    };
};

exports.tryTaskR = function (msg, fn, callback) {
    try {
        fn();
        callback(new Error('error expected'));
    } catch (err) {
        assert(err.message, msg);
        callback();
    }
};

exports.taskR = function (fn, inst, task, opts) {
    return function () {
        fn(inst, task, opts);
    }
};