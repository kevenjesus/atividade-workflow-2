var gulp     = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

const sass_path = './source/scss/**/*.scss';
const html_path = './source/**/*.html';

gulp.task('build-css',function(){
	return gulp.src(sass_path)
			   .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
			   .pipe(gulp.dest('./dist'));
});

gulp.task('minify-html',function(){
	return gulp.src(html_path)
			   .pipe(htmlmin({collapseWhitespace: true}))
			   .pipe(gulp.dest('./dist/'))
});

gulp.task('watch',function(){
	gulp.watch(sass_path,['build-css'])
		.on('change',function(event){
			 console.log('File ' + event.path + ' was ' + event.type + ', running tasks.');
		});
	gulp.watch(html_path,['minify-html'])
		.on('change',function(event){
			 console.log('File ' + event.path + ' was ' + event.type + ', running tasks.');
		});
});

