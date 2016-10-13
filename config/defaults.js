/**
 * Default configurations.
 */

'use strict';

module.exports = {
    /** Relative paths to listen on for changes and compile destinations. */
    paths: {
        dist:         "./dist/",
        tmp:          "./temp/",
        src:          "./**/*.{ts,scss,jade}",
        mock:         "",
        unit:         "",
        tasks:        ""
    },

    /** Configures server details for server being used. */
    server: {
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

    /** Loads jshintrc details. If set, will lint js source files. */
    jslint: {},

    /** Loads tslint details. If set, will lint typescript source files. */
    tslint: {},

    /** Necessary typescript details load here. */
    typescript: {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    },

    /** Default server and compilers to build project. */
    defaults: {
        server:           "browser-sync", // browser-sync or express
        compilers: {
            jade:         false,          // html
            scss:         false,          // css
            ts:           true            // typescript or javascript
        }
    }
};