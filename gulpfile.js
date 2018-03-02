var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

gulp.task('styles', function() {
    return gulp.src('scss/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({
            basename: 'styles',
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('clean', function(cb) {
    return del(['css'], cb);
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss',
    ['styles']);
});

gulp.task('default', ['clean'],
  function() {
    gulp.start('styles', 'watch');
  }
);
