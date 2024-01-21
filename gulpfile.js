const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

function styles() {
  return gulp
    .src('src/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
}

function moveHTML() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
}

function moveAssets() {
  return gulp.src('src/assets/**/*').pipe(gulp.dest('dist/assets'));
}

function moveJS() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'));
}
function watch() {
  gulp.watch('src/**.scss', styles);
  gulp.watch('src/**.html', moveHTML);
  gulp.watch('src/assets/**/*', moveAssets);
  gulp.watch('src/js/**/*.js', moveJS);
}

exports.default = gulp.series(
  gulp.parallel(styles, moveHTML, moveAssets, moveJS),
  watch
);