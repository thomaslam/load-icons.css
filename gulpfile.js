var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create();

gulp.task('lint', function() {
  return gulp.src('./*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch-lint', function() {
  gulp.watch('./*.js', ['lint']);
});

gulp.task('default', ['lint', 'watch-lint'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('*.js').on('change', browserSync.reload);
  gulp.watch('*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});
