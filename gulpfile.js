var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');
var gulpReactDocs = require('gulp-react-docs');

/**
 * Tasks are added by the react-component-gulp-tasks package
 *
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 *
 * You can also add your own additional gulp tasks if you like.
 */

var taskConfig = {

	component: {
		name: 'ReactSimpleOptionsSelector',
		dependencies: [
			'classnames',
			'react',
			'react-dom'
		],
		lib: 'lib'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'example.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);


gulp.task('react-docs', function() {
    var docsDest = 'docs';

    return gulp.src('./src/*.js')
        .pipe(gulpReactDocs({
            path: docsDest
        }))
        .pipe(gulp.dest(docsDest));
});