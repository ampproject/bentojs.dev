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

const fs = require('fs/promises');
const PurgeCSS = require('purgecss').PurgeCSS;
const csso = require('csso');

/**
 * Inlines all of the page's CSS into the <head>
 */
async function insertStyles(content, outputPath) {
  if (!outputPath || !outputPath.endsWith('.html')) {
    return content;
  }

  const css = await fs.readFile('./dist/assets/css/bento-dev.css', {
    encoding: 'utf-8',
  });

  const purged = await new PurgeCSS().purge({
    content: [
      {
        raw: content,
        extension: 'html',
      },
      './src/lib/**/*.js',
    ],
    css: [
      {
        raw: css,
      },
    ],
    defaultExtractor: (content) => {
      return content.match(/[A-Za-z0-9\\:_-]+/g) || [];
    },
  });

  const minifiedCss = csso.minify(purged[0].css).css;
  if (!minifiedCss.length) {
    throw new Error(`Minified CSS for ${outputPath} has no length.`);
  }

  content = content.replace(
    '<style>/* bento-dev.css */</style>',
    `<style>${minifiedCss}</style>`,
  );

  return content;
};

module.exports = insertStyles;
