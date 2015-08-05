var gulp = require('gulp');

var browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('sass-compile', function() {
  return gulp.src('./sass/load-icons.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 8']
          }))
          .pipe(gulp.dest('./css/'))
          .pipe(minifycss())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/*/*.scss', ['sass-compile']);
});

gulp.task('default', ['sass-compile', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./*/*.js').on('change', browserSync.reload);
  gulp.watch('./*/*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});
