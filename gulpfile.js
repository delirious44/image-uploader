var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
 
var paths = {  
  sass: ['./sass/**/*.sass'],
  pug: ['./pug/**/*.pug']
};  



// ##### PUG TO HTML #####
gulp.task('pug', function() {
  gulp.src('./pug/**/*.pug')
  .pipe(pug({
      pretty: true
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('watch-pug', function(){
    gulp.watch('pug', ['pug'])
});
// ##### SASS WATCH #####
gulp.task('sass', function () {
  return gulp.src('./sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});
gulp.task('watch', function() {  
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.pug, ['pug']);
});


gulp.task('default', ['watch']);  