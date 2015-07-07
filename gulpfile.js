var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
    gulp.src("**/*.css")
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server : {
            baseDir: "./app"
        }
    });

    gulp.watch("**/*.css", ['css']);
    gulp.watch("app/**/*.{html,js}").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
