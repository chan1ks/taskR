'use strict';

require('mocha');
var assert = require('assert');
var gulp = require('gulp');
var taskR = require('../');
var support = require('./fixtures/support');
var msg;

describe('taskR', function () {
    it('should throw an error when and instance of gulp is not the first argument', function (done) {
        var taskR = support.taskR(taskR);
        msg = 'taskR expects an instance of inst as the first argument';
        support.tryTaskR(msg, taskR, done);
    });

    it('should throw an error when a module can\'t be found', function (done) {
        var taskR = support.taskR(taskR, gulp);
        msg = null;
        support.tryTaskR(msg, taskR, done);
    });

    it('should find a single custom task without errors', function (done) {
        var taskR = support.taskR(taskR, gulp, 'default', {paths: {tasks: 'lib/tasks/'}});
        support.tryTaskR(msg, taskR, done);
    });

    it('should find an array of custom task without errors', function (done) {
        var taskR = support.taskR(taskR, gulp, ['default', 'clean'], {paths: {tasks: 'lib/tasks/'}});
        support.tryTaskR(msg, taskR, done);
    })
});