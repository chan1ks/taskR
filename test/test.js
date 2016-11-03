'use strict';

require('mocha');
var assert = require('assert');
var support = require('./fixtures/support');
var gulp = require('gulp');
var taskR = require('../');
var msg;

describe('taskR', function () {
    it('should throw an error when and instance of gulp is not the first argument', function (done) {
        msg = 'taskR expects an instance of gulp as the first argument';
        support.tryTaskR(msg, taskR, done);
    });

    it('should throw an error when an empty array of tasks is defined', function (done) {
        msg = 'taskR expects an array of tasks as the second argument';
        var noTask = support.doTaskR(taskR, gulp, []);
        support.tryTaskR(msg, noTask, done);
    });

    it('should throw an error when a module can\'t be found', function (done) {
        msg = null;
        var build = support.doTaskR(taskR, gulp, ['build']);
        support.tryTaskR(msg, build, done);
    });

    it('should find custom tasks without errors', function () {
        var opts = {paths: {tasks: 'test/fixtures/lib/tasks/'}};
        var func = support.doTaskR(taskR, gulp, ['default'], opts)();
        assert(typeof func.default === 'function');

        var funcs = support.doTaskR(taskR, gulp, ['default', 'clean'], opts)();
        assert(typeof funcs.default === 'function');
        assert(typeof funcs.clean === 'function');
    });
});