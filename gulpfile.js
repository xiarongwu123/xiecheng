var gulp = require('gulp');
var load = require('gulp-load-plugins')()
var browser = require('browser-sync').create()
//编译scss文件
gulp.task('sass',function(donc){
    gulp.src('./src/css/index.scss')
    .pipe(load.sass())
    .pipe(load.minifyCss())
    .pipe(gulp.dest('../携程/dist/css/'))
    done()
})
//save执行任务sass和js 并重新加载浏览器
gulp.task('save',gulp.series(gulp.parallel('sass'),function(done){
    browser.reload()
    done()
}))
//开启自刷新的静态服务器
gulp.task('server',function(done){
    browser.init({
        server:'./dist/',
        port:8080,
      
    })
    //观测到scr文件夹下的文件变化后跟新服务器
    gulp.watch('./src',gulp.series('save'))
    done()
})