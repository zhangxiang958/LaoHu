/**
 * learning-gulp - gulpfile.js
 * Created by mengdesen on 15/4/14.
 * Last modified by nieweidong on 2015/04/15
 */

'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
// var rev = require('gulp-rev');
// var revCollector = require('gulp-rev-collector');

gulp.task('connect', function(){
	connect.server({
		root: './src',
		port: 8080,
		livereload: true
	});
});

var appList = ['app', 'router'];

gulp.task('bundle', function(){
	return gulp.src(mapFiles(appList, 'js'))
				.pipe(named())
				.pipe(webpack({
					module: {
						loaders: [{
							test: /\.vue$/,
							loader: 'vue'
						}, {
        					test: /\.js$/,
        					loader: 'babel',
        					exclude: /node_modules/,
        					query: {
				                presets: ['es2015']
				            }
      					},{
							test: /\.(png|jpg)$/,
							loader: 'url'
						}]
					},
					resolve: {
    					alias: {vue: 'vue/dist/vue.js'}
  					},
					watch: true
				}))
				// .pipe(uglify())
				// .pipe(rev())
        		.pipe(gulp.dest('src/lib/'))
				// .pipe(rev.manifest({
				// 	base: 'src/lib',
				// 	merge: true
				// }))
				// .pipe(gulp.dest('./rev'))
				.pipe(connect.reload());
});

// gulp.task('rev', function() {
//     gulp.src(['./rev/rev-manifest.json', './src/index.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//         .pipe(revCollector())                                   //- 执行文件内css名的替换
//         .pipe(gulp.dest('./src'));                     //- 替换后的文件输出的目录
// });


gulp.task('uglify', function() {
    return gulp.src(['src/lib/js/fastclick.js'])
    .pipe(uglify())
    .pipe(gulp.dest('src/lib/js/*.min.js'));
});


function mapFiles(list, extname) {
	return list.map(function (app){
		return 'src/' + app + '.' + extname;
	});
};



gulp.task('default', ['bundle', 'connect']);

