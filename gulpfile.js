const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")

gulp.task('sass', function(){
  return gulp.src('app/styles/scss/styles.scss').pipe(sass()).pipe(gulp.dest('app/styles/css'))
})

gulp.task('watch', function(){
    gulp.watch('app/styles/scss/*.scss', gulp.series('sass'));
});
