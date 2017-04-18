var gulp = require('gulp');
var pug = require('gulp-pug');
 
// ##### PUG TO HTML #####

// ##### Compile Includes Folder ######
gulp.task('pug', function() {
  gulp.src('./*.pug')
  .pipe(pug({
      pretty: true
  }))
  .pipe(gulp.dest('./..'))
});

gulp.task('watch', function(){
    gulp.watch('./*.pug', ['pug'])
});

gulp.task('default', ['pug','watch']);