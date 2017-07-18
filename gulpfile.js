/* jshint esversion: 6 */

// ----- DEPENDENCIES ----- //

// Include gulp
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Include plugins

const $ = require('gulp-load-plugins')({
        pattern: ['*'],
        scope: ['devDependencies']
    });

const pngquant = require('imagemin-pngquant');


// ----- SETTINGS ----- //

var publicDir = 'app/',
    srcDir    = 'src/',
    bowerDir  = srcDir + 'bower_components/',

    jQueryDir = bowerDir + 'jQuery/dist/jquery.min.js';


var phpInput = [
  publicDir + '**/*.php'
];

var stylesInput = srcDir + 'styles/**/*.{scss,sass}';
var stylesDest  = publicDir + 'css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle:    'expanded'
};

var jsInput     = [
  srcDir + 'scripts/src/**/*.js'
];
var jsDest      = publicDir + 'js/dist/';

var jsSequence  = [
  jQueryDir,
  srcDir + 'scripts/dist/**/*.js'
];
var jsOutput    = publicDir + 'js/';

var imagesInput = srcDir + 'images/**/*';
var imagesDest  = publicDir + 'images';



// ************************* //
// --------- TASKS --------- //

// gulp.task('php', () => {
  // return gulp.src(phpInput)
    // .pipe(browserSync.stream());
// });

// -------- STYLES --------- //

gulp.task('styles', () => {
  var processors = [
    $.postcssCssnext
  ];

  return gulp.src(stylesInput)

    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.postcss(processors))
    .pipe($.sourcemaps.write('.'))
    .pipe($.gulp.dest(stylesDest))

    .pipe($.filter('**/*.css'))
    .pipe(browserSync.stream());
});

// clean-css: further compress css files
gulp.task('cleanCSS',  () => {
  var cleanCSS = require('gulp-clean-css');

  return gulp.src('app/css/*.css')
    .pipe($.cleanCSS({compatibility: "ie8"}))
    .pipe(gulp.dest(stylesDest));

});

// -------- JAVASCRIPT --------- //

gulp.task('scripts', () => {
  $.runSequence('minifyScripts','bundleScripts');
});

// Concatenate & minify JS
gulp.task('minifyScripts', () => {
  return gulp.src(jsInput)
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(jsDest));
});

// bundle JS
gulp.task('bundleScripts', () => {
  return gulp.src(jsSequence)
    .pipe($.concat('app.js'))
    .pipe(gulp.dest(jsDest))
    .pipe($.rename('app.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream());
});

// image minification
gulp.task('images', () => {
  gulp.src(imagesInput)
    .pipe($.newer(imagesDest))
    .pipe($.imagemin([$.imagemin.gifsicle(),
                      $.imagemin.jpegtran(),
                      pngquant()
                    ]))
    .pipe(gulp.dest(imagesDest));
});


// Watch files for changes
gulp.task('watch', () => {
  gulp.watch(phpInput).on('change', () => {
    console.info('PHP changes detected');
    browserSync.reload();
  });
  gulp.watch(jsInput,     ['scripts']);
  gulp.watch(imagesInput, ['images']);
  gulp.watch(stylesInput, ['styles']);
});


// -------- SERVE --------- //

gulp.task('serve', () => {
  browserSync.init({
    proxy: "localhost:8888/aca-i/app/"
  });
});

// -------- INDEX -------- //


// Default task
gulp.task('default', [
  'styles',
  'images',
  'scripts',
  'serve',
  'watch']);

// Production task
gulp.task('production', [
  'default',
  'cleanCSS'
]);
