module.exports = function (config) {
  config.set({
    basePath: './..',
    reporters: ['mocha'],
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      'lib/fecal.js',
      'test/fecal.spec.js'
    ]
  });
}
