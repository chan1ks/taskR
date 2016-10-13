/**
 * Quickly builds applications with commonly-used npm modules.
 *
 * `build-starter` configs can be customized if a user-defined set of
 * configs are defined.
 */

'use strict';

var Tasks = require('./config/tasks');
var defaults = require('./config/defaults');
var merge = require('lodash.merge');

function getTask(gulp, task, opts) {
    return require(opts.paths.tasks + task)(gulp, opts);
}

module.exports = function(gulp, tasks, opts) {
    if (typeof gulp === 'undefined') {
        throw new TypeError('taskR expects an instance of gulp as the first argument');
    }

    if (typeof opts === 'undefined') {
        opts = tasks;
        tasks = null;
    }

    if (typeof tasks === 'string') {
        tasks = [tasks];
    }

    tasks = tasks || Tasks;
    opts = merge({}, defaults, opts);

    tasks.forEach(function (task) {
        gulp.task(task, getTask(gulp, task, opts));
    });
};
