var gulp = require('gulp');
var webserver = require('gulp-webserver');
var paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
    tmp: 'tmp',
    tmpIndex: 'tmp/index.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',
    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
  };

gulp.task('htmlcopy', function () {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});
gulp.task('csscopy', function () {
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});
gulp.task('jscopy', function () {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});
gulp.task('copy', ['htmlcopy', 'csscopy', 'jscopy']);

gulp.task('run', ['copy'], function () {
    return gulp.src(paths.tmp)
      .pipe(webserver({
        port: 3333,
        livereload: true
      }));
});

gulp.task('watch', ['run'], function () {
    gulp.watch(paths.src, ['copy']);
});