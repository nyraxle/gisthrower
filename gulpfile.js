'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const chalk = require('chalk');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');

// Source Paths
const paths = {
  src: './src',
};
paths.srcJS = paths.src + '/**/*.js';

// Error Handlers
var errorHandler = function (error) {
  let taskMessage = chalk.bold.red('Task Finished With Errors:',error.name,' with',error.message);
  this.emit('end');
};

gulp.task('default', ['lint']);

// Lint
gulp.task('lint', (callback) => {
  return gulp.src(paths.srcJS)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.result((result) => {
      let fileLog = chalk.blue('ESLint for file:', result.filePath);
      let messageLog = chalk.bold.gray(' #Messages:', result.messages.length);
      let warningLog = chalk.bold.yellow(' #Warnings:', result.warningCount);
      let errorLog = chalk.bold.red(' #Errors:', result.errorCount);
      gutil.log(fileLog + messageLog + warningLog + errorLog);
    }))
    .pipe(eslint.failAfterError());;
});
