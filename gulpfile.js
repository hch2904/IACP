const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sassPartialsImported = require('gulp-sass-partials-imported');
let scss_dir = 'scss/';
/*gulp.task('default',function(){
	console.log('Hello World Gulp Ran!!!');
});*/
gulp.task('sass',function(){
	return gulp.src('scss/*.scss')
		.pipe(sassPartialsImported(scss_dir))
		.pipe(sass({includePaths: ['./scss']})).on('error',sass.logError)
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir: ''
		}
	})
});
gulp.task('watch',['browserSync','sass'],function(){
	gulp.watch('scss/*.scss',['sass']);
	gulp.watch('*.html',browserSync.reload);
	gulp.watch('partials/*.html',browserSync.reload);
	gulp.watch('js/*.js',browserSync.reload);
});

