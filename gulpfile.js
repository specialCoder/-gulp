var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('lint',function(){
	gulp.src('/src/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
gulp.task('sass',function(){
	gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'));
});
gulp.task('script',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./dist'))
	.pipe(rename('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'));
	
	console.log('gulp task  is done');
	
});
gulp.task('default',function(){
	gulp.run('lint','script');
	gulp.watch('src/js/*.js',function(){
		gulp.run('lint','script');
	});
});