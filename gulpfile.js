const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const del = require('del');

function clean() {
  return del(['dist/*']);
}

function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
}

function scripts() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

function images() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

function watch() {
  gulp.watch('src/styles/*.scss', styles);
  gulp.watch('src/js/*.js', scripts);
  gulp.watch('src/images/*', images);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, images));

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.build = build;
exports.watch = watch;
exports.default = build;