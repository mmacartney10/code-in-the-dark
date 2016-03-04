var uglify = require('gulp-uglify')

module.exports = function (gulp) {
  gulp.task('scripts', function () {
    return gulp.src('./_src/scripts/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build/'))
  })
}
