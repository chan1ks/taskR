'use strict';

var gulp = require('gulp');
var taskR = require('../../');

// test by running `gulp --cwd test/fixtures default`
taskR(gulp, ['default', 'clean'], {paths: {tasks: './lib/tasks/'}});
