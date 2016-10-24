/**
 * Quickly builds applications with commonly-used npm modules.
 *
 * `taskR` configs can be customized if a user-defined set of
 * configs are defined.
 */

'use strict';

var merge = require('lodash.merge');
var path = require('path');
var Tasks = require('./lib/tasks');
var defaults = require('./lib/defaults');

function getTask(inst, task, opts) {
    var fp = path.resolve(process.cwd(), opts.paths.tasks, task);
    return require(fp)(inst, opts);
}

module.exports = function (inst, tasks, opts) {
    if (typeof inst !== 'object') {
        throw new TypeError('taskR expects an instance of inst as the first argument');
    }

    if (typeof tasks === 'string') {
        tasks = [tasks];
    }

    if (opts.express && opts.bsync) {
        throw new TypeError('taskR expects either an express or browser-sync option');
    }

    if (opts.jshint && opts.tslint) {
        throw new TypeError('taskR expects either a jslinting or tslinting option');
    }

    tasks = tasks || Tasks;
    opts = merge({}, defaults, opts);

    tasks.forEach(function (task) {
        inst.task(task, getTask(inst, task, opts));
    });
};
