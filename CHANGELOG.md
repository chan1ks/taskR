# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Version-ing](http://semver.org/).

## [Unreleased]
- Update tasks to ES6/ES2016 syntax.
- Update task's sync/async run-sequences to gulp 4+ release.

### [0.9.0] - 2016-10-13
#### Added
- Default config for tasks lib location
- Type checking for tasks and options

#### Changed
- Refactored config loading for override options.

#### Deprecated
- Class instantiation.

### [0.8.0] - 2016-06-28
#### Changed
- Set module tasks as class.
- Module index.js now contains the main functions for instantiation the module.

#### Removed
- Call to deprecated file.

#### Deprecated
- Pointer lib file for tasks runners.

### [0.7.0] - 2016-06-06
#### Changed
- Created unit tests in jasmine.

### [0.6.4] - 2016-06-06
#### Changed
- Required defaults to module index.

### [0.6.3] - 2016-06-03
#### Changed
- Fixed errors in build functions.
- Revised log functions in event logger and calls within build functions
- Appended missing defaults config.

### [0.6.2] - 2016-06-02
#### Added
- Default configs if user-defined configs are not provided.

#### Changed
- Revised required config options to run app.

### [0.6.1] - 2016-06-01
#### Changed
- Refactored bin module extension.

#### Removed
- Console log in main task file.

### [0.6.0]
#### Added
- Extended utils.

#### Changed
- Revised gulp's task loading sequence.
- Simplified task modules.

### [0.5.1] - 2016-05-31
#### Changed
- Set default gulp task names to auto register.

### [0.5.0]
#### Changed
- Expand lint task to handle all pre-compiled languages along with javascript.
- Simplify defaults for running express or browser-sync servers.
- Enable definition of proxy settings.
- Re-mapped config access in every task from paths to config.
- Allowed objects as set of params for runnable tasks and config.
- Enabled callback for browserify.init() to run additional handler functions.
- Included a process.title name when running the build-starter. The modules name will show up in ps.
- Added directory and file exclusions to .gitignore.
- Moved all build tasks out of default task's directory and into its own. An object of tasks will be read properly, and tasks will be registered from their respective directories.

### [0.4.0] - 2016-05-27
#### Added
- Index.js file to auto launch the modules.
- Added bin directory for installing to global npm modules.
- Server directory with server task and server-util functions.
- Rc file for jshint linting.
- Configuration file for typescript compiling ES6/ES2015 application.
- Server-util browser-sync functions now handles external server configuration module.
- JSON file for typescript linting.

#### Changed
- Renamed gulpfile.js to build-stater.js.
- Build directory is now lib.
- Production, development, and mock tasks no longer accept CLI commands to build applications.
- Build tasks modified to accept simpler gulp configurations when loaded as a dependency.
- Defaults expanded to reflect the project's simplified gulp server, compiler, api, and asset configurations.
- Move tasks now accept default and pre-compile source file extensions (.jade, .ts, etc.).
- Watch tasks now accept changes to default and pre-compile source file extensions.
- EventLogger expanded to log start and end of tasks with a custom message.
- Restored creation of sourcemaps with saving to dist path.
- Package.json license link.

#### Deprecated
- Gulpfile.js to prevent clashing with project's gulpfile.

#### Removed
- BrowserSync.js and task now lives in server-util.

### [0.3.1] - 2016-01-25
#### Changed
- Resolved errors in watch, browser-sync and html tasks.

### [0.3.0] - 2016-01-25
#### Added
- Added default ports to config local dev builds utilizing browser-sync task.

#### Changed
- Replaced styles environment check for local and custom dev builds.
- Modified build-utils task to console log for environment variables.
- Pre-built files in Angular and annotated now ngAnnotate angular dependencies when bundles are uglified.

### [0.2.0] - 2016-01-20
#### Added
- Css task for moving css files into dist.

#### Changed
- Html task style and processify checks.

### [0.1.1] - 2015-12-11
#### Added
- Gulpfile.js and separated basic tasks into individual files.
- Default gulp tasks for building the project source files.
- Mover tasks to place build files in dist.
- Watcher tasks to facilitate watching for source changes.

### [0.1.0] - 2015-12-04
#### Added
- Package.json file tracking dev dependencies and initial package information setup.
- README file with starter instruction for this core module's installation and usage.
- LICENSE file establishing open-source use.
- Root file structure and nested directories for the module's build.