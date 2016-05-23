/**
 * Created by UCHATNU on 5/23/2016.
 */
var jshint = require('gulp-jshint');
var gulp = require('gulp');


gulp.task('default',function(){
    //do something here
    console.log("Default Gulp Task Completed...");
})

gulp.task('lint',function(){
    return gulp.src('./js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

