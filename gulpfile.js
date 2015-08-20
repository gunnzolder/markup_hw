'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core');

var processors = [
        autoprefixer({browsers: 'last 2 versions'})
    ];

/* SCSS */

gulp.task('sass', function () {
    gulp.src([
        'lesson*/*.scss', 'exam/*.scss'
    ], { base: '.' })
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('.'))
        .pipe(postcss(processors))
        .pipe(gulp.dest('.'));
});

/* Watcher */

gulp.task('watch', function () {
    gulp.watch(['lesson*/*.scss', 'exam/*.scss'], ['sass']);
});