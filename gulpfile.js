const validate = require('gulp-w3c-css');

const path = require('path');
const gulp = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const order = require('gulp-order');
const babel = require('gulp-babel');
const { series } = require('gulp');



function validadorCSS(cb) {
  const srcPath = path.join(__dirname, './css/*.css');
  const dstPath = path.join(__dirname, './build');

  gulp.src(srcPath)
    .pipe(validate())
    .pipe(gulp.dest(dstPath));

  cb();
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function diw(cb) {
  // place code for your default task here
  cb();
}

function watchCSS(cb) {

  watch('./css/*.css', validadorCSS);

  cb();
}

function watchSass() {
  watch("./sass/*.scss", compiladorSass);
}

function compiladorSass() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}
function compressJs() {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));

}
function concatCss() {

  return gulp.src('./dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css'));

}
function concatJs() {

  return gulp.src('./dist/js/*.js')
  .pipe(order(['application.js',
  'jquery-2.1.0.min.js']))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));

}
function bab(){
  return gulp.src('./dist/js/all.js')
  .pipe(babel())
  .pipe(concat('all-babel.js'))
.pipe(gulp.dest('./dist/js'));
}



exports.default = defaultTask
exports.marian = diw;
exports.css = validadorCSS;
exports.watch = watchCSS;
exports.compSass = compiladorSass;
exports.watchSass = watchSass;
exports.compJs = compressJs;
exports.conCss = concatCss
exports.conJs = concatJs;
exports.babelJs = bab;
exports.default = series(watchCSS,
  compiladorSass,
  concatCss,
  compressJs,
  concatJs,
  bab);

