'use strict';

var gulp = require('gulp');
var taskR = require('../');

taskR(gulp, 'default', {paths: {tasks: 'lib/tasks/'}});