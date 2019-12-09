const gulp = require('gulp'),
    del = require('del'),
    seqRunner = require('run-sequence'),
    uglify = require('gulp-uglify-es').default,
    webpack = require('webpack-stream'),
    compiler = require('webpack'),
    rename = require('gulp-rename'),
    prettier = require('gulp-prettier'),
    minifyHTML = require('gulp-htmlmin'),
    minifyCSS = require('gulp-cssmin'),
    minifyIMG = require('gulp-imagemin')

gulp.task('clean', () => {
    return del('./pkg', {
        force: true
    });
});

gulp.task('pack-dependencies', () => {
    gulp.src('./src/assets/js/*').pipe(gulp.dest('./pkg/assets/js'));
    return gulp.src('./src/assets/css/*').pipe(gulp.dest('./pkg/assets/css'));
});

gulp.task('js-pretty', () => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(prettier({
            singleQuote: true
        }))
        .pipe(gulp.dest('./src/scripts'));
});

gulp.task('bundle-scripts-assistant', () => {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(webpack({
        mode: 'development'
    }, compiler))
    .pipe(uglify({
        output: {
            max_line_len: 80
        }
    }))
    .pipe(rename('assistant.js'))
    .pipe(gulp.dest('./pkg/scripts'));
});

gulp.task('bundle-scripts-background', () => {
    return gulp.src('./src/scripts/background/**/*.js')
        .pipe(webpack({
            mode: 'development'
        }, compiler))
        .pipe(uglify({
            output: {
                max_line_len: 80
            }
        }))
        .pipe(rename('background.js'))
        .pipe(gulp.dest('./pkg/scripts'));
});

gulp.task('bundle-styles', () => {
    return gulp.src('./src/styles/*')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./pkg/styles'));
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

gulp.task('bundle-images', () => {
    return gulp.src('./src/assets/img/*')
        .pipe(minifyIMG())
        .pipe(gulp.dest('pkg/assets/img'));
});

gulp.task('build', () => {
<<<<<<< HEAD
    seqRunner('clean', 'js-pretty', 'bundle-scripts-background', [
        'pack-dependencies',
        'bundle-scripts-assistant',
        'bundle-views',
        'bundle-remain',
        'bundle-styles',
        'bundle-images'
    ]);
=======
    seqRunner('clean', 'js-pretty', ['pack-dependencies', 'bundle-scripts', 'bundle-views', 'bundle-remain', 'bundle-styles', 'bundle-images']);
>>>>>>> d1e3de4a51d1dada8265106f50babd9f9cf60a2b
});

gulp.task('run', ['pack-dependencies', 'bundle-scripts', 'bundle-remain', 'bundle-views', 'bundle-styles']);

gulp.task('watch', () => {
<<<<<<< HEAD
    seqRunner('clean', 'js-pretty', 'bundle-scripts-background', [
        'pack-dependencies',
        'bundle-scripts-assistant',
        'bundle-views',
        'bundle-remain',
        'bundle-styles',
        'bundle-images'
    ]);
=======
    seqRunner('clean', 'js-pretty', ['pack-dependencies', 'bundle-scripts', 'bundle-views', 'bundle-remain', 'bundle-styles', 'bundle-images']);
>>>>>>> d1e3de4a51d1dada8265106f50babd9f9cf60a2b
    gulp.watch('./src/assets/js/*',['pack-dependencies']);
    gulp.watch('./src/scripts/assistant/**/*.js', ['bundle-scripts-assistant']);
    gulp.watch('./src/scripts/background/**/*.js', ['bundle-scripts-background']);
    gulp.watch('./src/manifest.json', ['bundle-remain']);
    gulp.watch('./src/ui/**/*', ['bundle-views']);
    gulp.watch('./src/styles/*', ['bundle-styles']);
    gulp.watch('./src/assets/img/*', ['bundle-images']);
});

gulp.task('default', ['run', 'watch']);
