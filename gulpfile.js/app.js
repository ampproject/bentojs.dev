const gulp = require('gulp');
const esbuild = require('esbuild');

const ENTRY_POINTS = [
  'app/bundles/home.js',
  'app/bundles/documentation.js',
]

const OUT_DIR = 'assets/js';

async function build() {
  return esbuild.build({
    entryPoints: ENTRY_POINTS,
    outdir: OUT_DIR,
    bundle: true,
    minify: true,
  });
}

const watch = () => gulp.watch('./app/**/*.js', () => {
  return esbuild.build({
    entryPoints: ENTRY_POINTS,
    outdir: OUT_DIR,
    bundle: true,
  });
})

module.exports = {
  watch,
  build,
};
