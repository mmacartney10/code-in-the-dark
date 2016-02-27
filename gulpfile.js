var gulp = require('gulp')
var runSeq = require('run-sequence')

require('./tasks/webpack.js')(gulp)

gulp.task('scripts', function (cb) {
  runSeq(['webpack'], cb)
})

gulp.task('default', ['scripts', 'browser-sync'], function () {
  // gulp.watch('./styles/*.scss', ['sass'])
})
