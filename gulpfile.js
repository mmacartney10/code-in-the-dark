var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');

var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');

var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
  browserSync({
    server: {},
    middleware: [ historyApiFallback() ],
    ghostMode: false
  });
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  
  var props = {
    entries: ['./app/' + file],
    debug : true,
    transform:  [babelify.configure({stage : 0 })]
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./build/'))
      .pipe(reload({stream:true}))
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('test.js', false); // this will once run once because we set watch to false
});

// run 'scripts' task first, then watch for future changes
<<<<<<< HEAD
gulp.task('default', ['scripts','browser-sync'], function() {
  gulp.watch('css/**/*', ['styles']); // gulp watch for stylus changes
  return buildScript('test.js', true); // browserify watch for JS changes
=======
gulp.task('default', ['scripts','browser-sync', 'sass'], function() {
  gulp.watch('./styles/*.scss', ['sass']);
  return buildScript('main.js', true); // browserify watch for JS changes
>>>>>>> 353813d72b8babdfc9d10c98e3bd6eeaade9013d
});
