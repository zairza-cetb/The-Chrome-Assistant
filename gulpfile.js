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

gulp.task('default', () => {
    console.log('Supported gulp tasks: clean, watch, build');
    return;
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

gulp.task('watch', ['package-dependencies'], () => {
    gulp.watch('./src/assets/js/*')
});
