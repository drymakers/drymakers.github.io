var

    gulp = require("gulp"),
    sass = require("gulp-sass"),
    livereload = require("gulp-livereload"),
    autoprefixer = require("gulp-autoprefixer"),
    cleancss =require("gulp-clean-css"),
    rename = require("gulp-rename");


gulp.task("reload-css", function () {
    gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['last 3 versions'],
        	cascade: false
        }))
        .pipe(gulp.dest('./src/css/'))
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/css/'))
        .pipe(livereload());

});


gulp.task("default", function () {

    livereload.listen();

    gulp.watch('./src/*.scss', gulp.parallel('reload-css', 'default'));

});
