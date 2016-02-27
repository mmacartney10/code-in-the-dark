var source = require('vinyl-source-stream')
var gutil = require('gulp-util')
var browserify = require('browserify')
var babelify = require('babelify')
var watchify = require('watchify')
var notify = require('gulp-notify')

var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')

var browserSync = require('browser-sync')
var reload = browserSync.reload
var historyApiFallback = require('connect-history-api-fallback')

var file = 'main.js'

module.exports = function (gulp) {
  gulp.task('browser-sync', function () {
    browserSync({
      server: {},
      middleware: [ historyApiFallback() ]
    })
  })

  gulp.task('webpack', function () {
    var props = {
      entries: ['./app/' + file],
      debug: true,
      transform: [babelify.configure({ stage: 0 })]
    }

    var bundler = watchify(browserify(props))

    function rebundle () {
      var stream = bundler.bundle()
      return stream
        .on('error', handleErrors)
        .pipe(source(file))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./build/'))
        .pipe(reload({ stream: true }))
    }

    bundler.on('update', function () {
      rebundle()
      gutil.log('Rebundle...')
    })

    return rebundle()
  })

  function handleErrors () {
    var args = Array.prototype.slice.call(arguments)
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args)
    this.emit('end')
  }
}
