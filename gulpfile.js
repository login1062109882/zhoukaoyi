// 下载 + 引入
const gulp = require('gulp');
const webserver = require('gulp-webserver');// 启动服务
const ugly = require("gulp-uglify");//合并js 
const concat = require('gulp-concat');
const sass = require('gulp-sass');

// 创建一个任务
// 压缩js文件
gulp.task('server', function () {
    gulp.src('./App/conntroller/*.js')
        .pipe(concat('date_format.min.js'))
        .pipe(ugly())
        .pipe(gulp.dest('./App/conntroller'))
});
gulp.task('default', ['server']);