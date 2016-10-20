/**
 * Default configurations.
 */

'use strict';

module.exports = {
    /** Relative paths to listen on for changes and compile destinations. */
    paths: {
        dist:         "./dist/",
        src:          "./**/*.{js,ts}",         // app source
        temps:        "./**/*.{html,jade}",     // templates source
        styles:        "./**/*.{css,scss}",      // stylesheets source
        mock:         "",                       // mocks source
        unit:         "",                       // path to unit tests
        tasks:        ""                        // path to require tasks from
    },

    /** Configures server details for server being used. */
    bsync: {
        settings: {
            injectChanges: false, // workaround for Angular 2 styleUrls loading
            watchOptions: {
                ignored: 'node_modules'
            },
            server: {
                baseDir: "./"
            },
            port: 9000,
            files: ["./dist/**", "!./dist/**.map"],
            open: true,
            debug: true,
            ui: false
        },
        proxies: "",
        callback: function noop() {}
    },

    express: {},

    /** Loads jshintrc or tslint details. If set, will lint source files. */
    lint: {
        jslint: {},
        tslint: {}
    }
};