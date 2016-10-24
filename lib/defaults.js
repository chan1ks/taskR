/** Default configurations. */

'use strict';

module.exports = {
    /** Relative paths to listen on for changes and compile destinations. */
    paths: {
        dist:         "./dist/",
        src:          "./**/*.{js,ts}",         // app source
        temps:        "./**/*.{html,jade}",     // templates source
        styles:        "./**/*.{css,scss}",     // stylesheets source
        mock:         "",                       // mocks source
        unit:         "",                       // path to unit tests
        tasks:        ""                        // path to require tasks from
    },

    /** Configures server details for server being used. */
    bsync: null,
    express: null,

    /** Loads jshintrc or tslint details. If set, will lint source files. */
    jshint: null,
    tslint: null
};