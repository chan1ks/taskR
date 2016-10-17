'use strict';
module.exports = function (gulp, opts) {
    return function () {
        // move all html files to `dist`
        return gulp.src('./app/**/*.html')
            .pipe(gulp.dest(opts.paths.dist));
    };
};