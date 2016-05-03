var gulp = require('gulp');
var sh = require('shelljs');

gulp.task('default', function(done){
    sh.exec('cordova run android', done); 
});
