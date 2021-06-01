'use strict'

const { src, dest, series, parallel, watch } = require('gulp');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const concat = require('gulp-concat');

const path = {
    scss: 'src/scss/app.scss',
    css: 'build/css',
    imgJpg: 'src/img/**/*.jpg',
    imgPng: 'src/img/**/*.jpg',
    imgJpeg: 'src/img/**/*.jpg',
    imgDestion: 'build/img',
    srcJS: 'src/js/**/*',
    buildJS: 'build/js',
}

function hola( done )
{
    console.log('Hola');
    done();
}

function compilarSCSS()
{
    return src(path.scss)
    .pipe( sass() )
    .pipe( dest(path.css) )
    .pipe( cssmin() )
    .pipe( rename({suffix: '.min'}) )
    .pipe( dest(path.css) )
}

function concatJS()
{
    src( path.srcJS )
    .pipe( concat('app.js') )
    .pipe( dest( path.buildJS ) )
}

function minIMG()
{
    return src( path.imgJpg )
    .pipe( imagemin() )
    .pipe( dest(path.imgDestion) )
    .pipe( webp() )
    .pipe( dest(path.imgDestion) )
}

function verArchivos()
{
    watch( 'src/scss/**/*', compilarSCSS);
    watch( path.srcJS, concatJS );
}

exports.hola = hola;
exports.compilarSCSS = compilarSCSS;
exports.minIMG = minIMG;
exports.concatJS = concatJS;
exports.default = parallel( hola, compilarSCSS, concatJS, minIMG, verArchivos );