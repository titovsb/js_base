const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function buildJs() {
    return gulp.src('./src/*.js')  // folder with js files
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))    // name for result JS file
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/'));    // folder for result JS file
}

gulp.watch('./src/*.js', buildJs);

exports.default = buildJs;