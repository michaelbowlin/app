// ------------------------------------------
// CONFIG test
// ------------------------------------------

// Gulp objects
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    csslint = plugins.csslint; // alias for csslinting reports


// Source paths
var scssDir = 'scss/',
	srcDir = 'docs/',
	scssSrc = scssDir + 'hybridapp.scss',
	cssDest = srcDir + 'assets/css/';

// Javascript files to be concatenated    


// Custom reporters
var cssLintReporter = function(file) {
	plugins.util.log(plugins.util.colors.cyan(file.csslint.errorCount)+' errors in '+ plugins.util.colors.magenta(file.path));
	file.csslint.results.forEach(function(result) {
		plugins.util.log(result.error.message+' on line'+ result.error.line);
	});
};


// ------------------------------------------
// COMPLIATION TASKS
// ------------------------------------------

// Styles
gulp.task('compile-css', function(){
	return gulp.src(scssSrc)
	    .pipe(plugins.rubySass())
	    .pipe(plugins.csscomb())
	    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4'))
	    .pipe(plugins.csslint(scssDir + '.csslintrc'))
	    .pipe(plugins.csslint.reporter(cssLintReporter))
	    .pipe(gulp.dest(cssDest))
	    .pipe(plugins.size({showFiles : 'true', title : 'Unminified CSS file size: '}))
	    .pipe(plugins.rename({suffix: '.min'}))
	    .pipe(plugins.cssmin())
	    .pipe(gulp.dest(cssDest))
	    .pipe(plugins.size({gzip : 'true', title : 'Minified CSS file size: '}))
	    .pipe(plugins.notify({ message: 'CSS task complete'}));
});

// Javascript



// ------------------------------------------
// TESTING TASKS
// ------------------------------------------

// CSS Lint
gulp.task('csslint', function(){
	return gulp.src(appDir + 'css/hybridapp.css')
		.pipe(csslint(scssDir + '.csslintrc'))
		.pip(csslint.reporter(cssLintReporter))
});

// JS Lint


// HTML Validation



// ------------------------------------------
// UTILITIES
// ------------------------------------------

// Watch Task
gulp.task('watch', function(){
	var server = plugins.livereload();
	gulp.watch(['hybridapp.scss',scssDir + '**/*.scss', scssDir + '**/**/*.scss']).on('change',function(file){
		gulp.start('css', function(){
			setTimeout(function(){
				server.changed(file.path);
			},100);
		});
	});

});

// ------------------------------------------
// DEFAULT TASK
// ------------------------------------------
gulp.task('default', function(){
	gulp.start('compile-css');
});
