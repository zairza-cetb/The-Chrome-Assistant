const gulp = require('gulp'),
    del = require('del'),
    seqRunner = require('run-sequence'),
    uglify = require('gulp-uglify-es').default,
    webpack = require('webpack-stream'),
    compiler = require('webpack'),
    rename = require('gulp-rename'),
    prettier = require('gulp-prettier'),
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
    .pipe(gulp.dest('./pkg/assets/js'));
});

gulp.task('js-pretty', () => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(prettier({
            singleQuote: true
        }))
        .pipe(gulp.dest('./src/scripts'));
});

gulp.task('bundle-scripts', () => {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(webpack({
        mode: 'production'
    }, compiler))
    .pipe(uglify({
        output: {
            max_line_len: 120
        }
    }))
    .pipe(rename('assistant.js'))
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
    seqRunner('clean', 'js-pretty', ['pack-dependencies', 'bundle-scripts', 'bundle-views', 'bundle-remain']);
});

gulp.task('watch', ['package-dependencies'], () => {
    gulp.watch('./src/assets/js/*')
});
