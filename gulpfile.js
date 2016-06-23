var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

var source = './src';
var destination = './dist';

gulp.task('clean:dist', function () {
  return del([
    'dist/*',
    'dist/skin-bootstrap-extensions/*',
  ]);
});

gulp.task('css:src', ['clean:dist'], function () {
  return gulp.src(source + '/skin-bootstrap-extensions/ui.fancytree.less')
    .pipe(plugins.less())
    .pipe(gulp.dest(source + '/skin-bootstrap-extensions/'));
});

gulp.task('css:dist', ['css:src'], function () {
  return gulp.src(source + '/skin-bootstrap-extensions/ui.fancytree.less')
    .pipe(plugins.less())
    .pipe(gulp.dest(destination + '/skin-bootstrap-extensions/'));
});

gulp.task('minify', ['css:dist'], function () {
  return gulp.src(destination + '/skin-bootstrap-extensions/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/skin-bootstrap-extensions/'));
});

gulp.task('js:min', ['minify'],function() {
  return gulp.src(source + '/*.js')
    .pipe(gulp.dest(destination))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination));
});


gulp.task('js:copy', ['js:min'], function () {
    return gulp.src(source + '/*.js')
      .pipe(gulp.dest(destination));
});

gulp.task('prod', [ 'js:min']);
