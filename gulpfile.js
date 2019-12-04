const gulp = require('gulp'),
    del = require('del'),
    seqRunner = require('run-sequence'),
    minify = require('gulp-minify')

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
    .pipe(minify({
        ext: {
          min: '.js'
        },
        noSource: true,
        mangle: false
    }))
    .pipe(gulp.dest('./pkg/assets/js'));
});

gulp.task('build', function() {
    seqRunner('clean', ['pack-dependencies']);
})

gulp.task('watch', ['package-dependencies'], () => {
    gulp.watch('./src/assets/js/*')
});