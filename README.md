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
taskR(gulp, { server: {}, paths: {}, typescript: {}, tslint: {} });
```

**NOTE**: Leaving blank options will load defaults.

* `gulp` **{Object}**: Instance of gulp to pass into tasks.
* `tasks` **{Array}**: List of tasks to be loaded. **NOTE**: Be sure to name the task and module the same.
* `options.paths` **{Object}**: Paths for `temp/`, `dist/`, `src/`, etc. directories.
* `options.server` **{Object}**: Define custom express or browser-sync server options. Leave blank for default browser-sync options.
* `options.typescript` **{Object}**: Set to use typescript compiling with babel. Leaving blank will use vanilla javascript.
* `options.tslint` **{Object}**: Lint typescript. Leaving blank will lint javascript.
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
        mock:   'path/to/mock/test/from/',
        unit:   'path/to/unit/test/from/',
        tasks:  'path/to/run/tasks/from/'
    }
}

taskR(gulp, opts);
```

#### Server Options

_**browser-sync**_ - Takes options from its [original module](https://www.browsersync.io/docs/options/).

_**express**_

- `httpPort` sets a http port to listen on
- `httpsPort` **optional** sets a https port to listen on
- `httpsKey` location of .key file in project
- `httpsCert` location of .crt file in project
- `proxies` sets proxy settings and takes a _string_ and/or _function_
- `router` sets a handler function for middleware processes
- `middleware`: _(coming soon)_

Example:

```js
var opts = {
    server: {
        httpPort:   number,
        httpsPort:  number,
        httpsKey:   string,
        httpsCert:  string,
        proxies: {
            target: string,
            matcher: function() {}
            // ...
        },
        router: function() {}
    }
}

taskR(gulp, opts);
```

#### Typescript Options

_**typescript**_ - Takes an object of compiler options needed to compile [typescript](https://www.typescriptlang.org/docs/tutorial.html) source files (see [typescript options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)).

#### Linting Options

_**jslint**_ - Takes an object of [jshint](http://jshint.com/docs/options/) options.

_**tslint**_ - Takes an object of [tslint](https://palantir.github.io/tslint/usage/tslint-json/) options.

#### Defaults Options

_**server**_ - Set which server to use (browser-sync or express). NOTE: server options need to be set accordingly for the server selected.
_**compilers.jade**_ - Set to `true` to compile jade source scripts.
_**compilers.scss**_ - Set to `true` to compile sass source scripts.
_**compilers.ts**_ - Set to `true` to compile typescript source scripts.

```js
var opts = {
    defaults: {
        server:           "server-task", // browser-sync or express
        compilers: {
            jade:         boolean,
            scss:         boolean,
            ts:           boolean
        }
    }
}

taskR(gulp, opts);
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