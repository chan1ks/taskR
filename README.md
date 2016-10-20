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
taskR(gulpInstance [, taskOrTasks, options]);
```

Customize your workflow based on your file structure preference keeping in mind that _**browser-sync watches on `dist/` relative to the project's root, but ignores mapped files if run without user-defined configs**_.

```js
var taskR = require('taskR');
taskR(gulp, { paths: {}, bsync: {}, express: {}, lint: {} });
```

**NOTE**: Leaving blank options will load defaults.

* `gulp` **{Object}**: Instance of gulp to pass into tasks.
* `tasks` **{Array}**: List of tasks to be loaded. **NOTE**: Be sure to name the task and module the same.
* `options.paths` **{Object}**: Paths for `temp/`, `dist/`, `src/`, etc. directories.
* `options.bsync` **{Object}**: Define custom browser-sync server options.
* `options.express` **{Object}**: Set to use express server options with routes.
* `options.lint` **{Object}**: Lint source files typescript.
* `returns` **{String}**: Returns the state of Node.js process to the original working directory.

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

### Options
An object of user-defined settings is **optional** on most options except the paths object. 

#### Directory Options

**NOTE**: these options are required (and probably a good idea to include them).

_**paths**_

- dist - path where compiled files are served from
- src - location of all source files including assets
- mock - location of E2E test source files
- unit - location for all testing source files
- tasks - location custom build tasks

```js
var opts = {
    paths: {
        dist:   'path/to/dist/',
        src:    'path/to/src/',
        temps:  'path/to/temps/',
        styles: 'path/to/styles/',
        mock:   'path/to/mock/test/from/',
        unit:   'path/to/unit/test/from/',
        tasks:  'path/to/run/tasks/from/'
    }
}
```

#### Server Options

_**browser-sync**_ - Takes options from its [original module](https://www.browsersync.io/docs/options/).

_**express**_ - Takes options from its [original module](http://expressjs.com/en/4x/api.html)

#### Typescript Options

_**typescript**_ - Takes an object of compiler options needed to compile [typescript](https://www.typescriptlang.org/docs/tutorial.html) source files (see [typescript options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)).

#### Linting Options

_**jslint**_ - Takes an object of [jshint](http://jshint.com/docs/options/) options.

_**tslint**_ - Takes an object of [tslint](https://palantir.github.io/tslint/usage/tslint-json/) options.

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