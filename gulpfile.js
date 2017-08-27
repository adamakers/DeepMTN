const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump')

/* 
  --TOP LEVEL FUNCTIONS
  gulp.task - Define tasks
  gulp.src - point to files to use. source files
  gulp.dest - point to folder to output
  gulp.watch - watch files and folders for changes
*/ 

//logs message
gulp.task('message', () => {
  return console.log('Gulp is running...');
});

//this is default task.  will run with just 'gulp' command
gulp.task('default', () => {
  return console.log('THIS IS DEFAULT');
});

//copy all html files
gulp.task('copyHtml', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

//minimizes images
gulp.task('imgmin', () => {
  gulp.src('src/img/*.jpeg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

//minimizes JS
gulp.task('mini', () => {
  gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

//compiles SASS
gulp.task('sass', () => {
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});
