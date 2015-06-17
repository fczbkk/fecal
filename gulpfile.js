var gulp = require('gulp');
var karma = require('karma').server;


gulp.task('default', ['test']);


gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: false,
    autoWatch: true
  }, done);
});
