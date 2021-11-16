/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const gulp = require('gulp');

const importAmphtml = require('./importAmphtml.js');
const importDocs = require('./importDocs.js');
const importHeroExamples = require('./importHeroExamples.js');
const eleventy = require('./eleventy.js');
const lint = require('./lint.js');
const sass = require('./sass.js');
const app = require('./app.js');
const svgstore = require('./svgstore.js');

const importAll = gulp.series(importAmphtml, gulp.parallel(importHeroExamples, importDocs));
const build = gulp.series(sass.build, app.build, svgstore, eleventy.build);
const develop = gulp.series(
  sass.build,
  app.build,
  svgstore,
  gulp.parallel(sass.watch, app.watch, eleventy.develop)
);

module.exports = {
  importAll,
  importDocs,
  importHeroExamples,
  lint,
  svgstore,
  default: build,
  build,
  develop,
};
