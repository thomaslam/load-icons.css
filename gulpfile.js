var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('lint', function() {
  return gulp.src('./*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('style', function() {
  return gulp.src('load-icons.scss')
        .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
          .pipe(gulp.dest('./'))
          .pipe(minifycss())
          .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch-lint', function() {
  gulp.watch('./*.js', ['lint']);
});

gulp.task('watch-style', function() {
  gulp.watch('load-icons.scss', ['style']);
});

gulp.task('default', ['lint', 'watch-lint', 'style', 'watch-style'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('*.js').on('change', browserSync.reload);
  gulp.watch('*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});
