const gulp = require('gulp'),
    del = require('del'),
    seqRunner = require('run-sequence'),
    uglify = require('gulp-uglify-es').default,
    minifyHTML = require('gulp-htmlmin')

gulp.task('clean', () => {
    return del('./pkg', {
        force: true
    });
});

gulp.task('pack-dependencies', () => {
    return gulp.src('./src/assets/js/*')
    // .pipe(uglify())
    .pipe(gulp.dest('./pkg/assets/js'));
});

gulp.task('bundle-scripts', () => {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./pkg/scripts'));
});

gulp.task('bundle-remain', () => {
    return gulp.src('./src/manifest.json')
        .pipe(gulp.dest('./pkg'));
});

gulp.task('bundle-views', () => {
    return gulp.src('./src/ui/**/*')
        .pipe(minifyHTML({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./pkg/ui'));
});

gulp.task('build', () => {
    seqRunner('clean', ['pack-dependencies', 'bundle-scripts', 'bundle-views', 'bundle-remain']);
});

gulp.task('run', ['pack-dependencies', 'bundle-scripts', 'bundle-remain', 'bundle-views']);

gulp.task('watch', () => {
    gulp.watch('./src/assets/js/*',['pack-dependencies']);
    gulp.watch('./src/scripts/**/*.js', ['bundle-scripts']);
    gulp.watch('./src/manifest.json', ['bundle-remain']);
    gulp.watch('./src/ui/**/*', ['bundle-views']);
});

gulp.task('default', ['run', 'watch']);
