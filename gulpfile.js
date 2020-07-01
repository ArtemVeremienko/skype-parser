import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import del from 'del';
import sync from 'browser-sync';

// HTML

export const html = () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(sync.stream());
};

// Styles

export const styles = () => {
  return gulp.src('src/css/style.css')
    .pipe(postcss([
      autoprefixer,
      csso
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream())
};

// Scripts

export const scripts = () => {
  return gulp.src('src/js/main.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser())
    .pipe(gulp.dest('build/js'))
    .pipe(sync.stream())
};

// Copy

export const copy = () => {
  return gulp.src([
    'src/fonts/**/*',
    'src/skype.svg',
  ], {
    base: 'src'
  })
    .pipe(gulp.dest('build'))
    .pipe(sync.stream({ once: true }))
};

// Copy media for test

export const copyMedia = () => {
  return gulp.src('media/*')
    .pipe(gulp.dest('build/media'))
}

// Server

export const server = () => {
  sync.init({
    server: 'build/',
    ui: false,
    notify: false,
    cors: true,
  })
};

// Watch

export const watch = () => {
  gulp.watch('src/*.html', html);
  gulp.watch('src/css/*.css', styles);
  gulp.watch('src/js/*.js', scripts);
};

// Clean 

export const clean = () => del('build');

// Build

export const build = gulp.series(
  clean,
  gulp.parallel(
    html,
    styles,
    scripts,
    copy
  )
);

// Default

export default gulp.series(
  build,
  copyMedia,
  gulp.parallel(
    watch,
    server
  )
);