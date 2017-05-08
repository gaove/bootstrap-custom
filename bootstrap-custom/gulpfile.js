var gulp = require('gulp')
	,browserSync = require('browser-sync')
	,less = require('gulp-less');

	gulp.task('server',function(){

	browserSync.init({
		server:{
			baseDir: 'public'
		}
	});


	gulp.watch('public/less/*.less').on('change', function(event){
		gulp.src(event.path)
			.pipe(less().on('error', function(error){
				console.log('Problema na Compilação');
				console.log(error.message)
			}))
			.pipe(gulp.dest('public/css'));
	});

	gulp.watch('public/**/*').on('change', browserSync.reload);

});


































	


