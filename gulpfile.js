// 🎄🎄🎄🎄🎄🎄🤶🎄🎄🎄🎄🎄🎄
// 1. Déclaration des variables
// 🎄🎄🎄🎄🎄🎄🎅🎄🎄🎄🎄🎄🎄
let gulp                = require('gulp');
let sass                = require('gulp-sass');
let rename              = require('gulp-rename');
let autoprefixer        = require('gulp-autoprefixer');

// 🎄🎄🎄🤶🎄🎄🎄
// 2. Mes tâches
// 🎄🎄🎄🎅🎄🎄🎄
gulp.task('sassification', function() {
    return gulp.src('dev/css/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(rename(function (path) {
        path.basename += ".min";
    }))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(gulp.dest('prod/css'));
});

// 🎄🎄🎄🎄🎄🤶🎄🎄🎄🎄🎄
// 3. Exécution des tâches
// 🎄🎄🎄🎄🎄🎅🎄🎄🎄🎄🎄
gulp.task('observe', gulp.parallel('sassification', function() {
    gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
}));

gulp.task('default', gulp.series('observe'));