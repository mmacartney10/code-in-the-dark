var gulp = require('gulp')
var runSeq = require('run-sequence')

require('./tasks/webpack.js')(gulp)
require('./tasks/scripts.js')(gulp)

gulp.task('bundle', function (cb) {
  runSeq(['webpack'], cb)
})

gulp.task('default', ['bundle', 'browser-sync'], function () {
  // gulp.watch('./styles/*.scss', ['sass'])
})
