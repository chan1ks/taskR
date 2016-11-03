# taskR [![Build Status](https://travis-ci.org/chan1ks/taskR.svg?branch=master)](https://travis-ci.org/chan1ks/taskR)
> Wrapper for loading a gulpfile at the current working directory.

### Install with [npm](npmjs.org):

```sh
$ npm install --save-dev taskR
```

## Usage

In a gulpfile, add:

```js
var gulp = require('gulp');
var taskR = require('taskR');
taskR(gulpInstance, [taskOrTasks] [, options]);
```

Customize your workflow based on your file structure preference.

```js
var taskR = require('taskR');
taskR(gulp, [task1, task2...], { paths: {}, server: {}, lint: {} });
```

* `gulp` **{Object}**: Instance of gulp to pass into tasks.
* `tasks` **{Array}**: List of tasks to be loaded. **NOTE**: Be sure to name the task and module the same.

##### Default Runnable Tasks

Running build tasks starts up a clean build, trans-compiles languages, and moves source files, and watches for changes. Proxies for each environment can be configured by overriding it as a server config option. Launching on a custom port is also allowed on development and production builds. However, mocks are loaded from user-defined fixtures. The path to fixtures can be defined in options.

Specify gulp's `--cwd` to manually set the cwd. More gulp CLI [flags](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md#flags).

```sh
$ gulp dev --port [number]
```

```sh
$ gulp prod --port [number]
```

```sh
$ gulp mock
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Contributing

Take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

For bugs or feature requests, [please create an issue](https://github.com/chan1ks/taskR/issues).

### Release History

See the [Changelog](https://github.com/chan1ks/taskR/blob/master/CHANGELOG.md) for detailed release history and upcoming release notes.

## Author
 
+ [github/chan1ks](https://github.com/chan1ks)
+ [twitter/chan1ks](http://twitter.com/chan1ks)

## License

Copyright © 2016, ["Captain" Morgan Worrell](https://github.com/chan1ks).  
Released under the [MIT license](https://github.com/chan1ks/taskR/blob/master/LICENSE).