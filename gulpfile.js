var gulp = require('gulp');
var jasmine = require('gulp-jasmine-browser');

gulp.task('test', function () {
  return gulp.src(['lib/fecal.js', 'test/fecal.spec.js'])
   .pipe(jasmine.specRunner({console: true}))
   .pipe(jasmine.headless());
});
