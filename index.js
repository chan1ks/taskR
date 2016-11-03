/**
 * Quickly builds applications with commonly-used npm modules.
 *
 * `taskR` configs can be customized if a user provides a set of configs.
 */

'use strict';

var resolve = require('path').resolve;

module.exports = function (inst, tasks, opts) {
    if (typeof inst !== 'object') {
        throw new TypeError('taskR expects an instance of gulp as the first argument');
    }

    if (typeof tasks === 'undefined' || !Array.isArray(tasks) || !tasks.length) {
        throw new TypeError('taskR expects an array of tasks as the second argument');
    }

    var funcs = {};

    function getTask(inst, task, opts) {
        var fp = resolve(process.cwd(), opts.paths.tasks, task);
        return require(fp)(inst, opts);
    }

    tasks.forEach(function (task) {
        funcs[task] = getTask(inst, task, opts);
        inst.task(task, funcs[task]);
    });

    return funcs;
};
