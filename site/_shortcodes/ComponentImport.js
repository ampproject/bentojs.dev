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

const fetch = require('node-fetch');
const Prism = require('prismjs');
const csso = require('csso');

async function componentImportShortcode(componentName) {
  return `<div class="bd-show-more">
  <section>
  <h3>Importing Bento components via CDN</h3>
  <p>To use this component you need to import the bento component runtime <code>bento.js</code>
   in to your <code>&lt;head&gt;</code>:</p>
  ${codeBlock(`<script type="module" src="https://cdn.ampproject.org/bento.mjs"></script> 
<script type="nomodule" src="https://cdn.ampproject.org/bento.js"></script>`)}
  <p>... and load the bento component script and styles:</p>
  ${codeBlock(`<script type="module" src="https://cdn.ampproject.org/v0/${componentName}-1.0.mjs"></script>
<script type="nomodule"  src="https://cdn.ampproject.org/v0/${componentName}-1.0.js"></script>
<style>${await fetchComponentStyles(componentName)}</style>`)}
  <button class="bd-button --show-more">Show more</button>
  </section>
  <section class="--more --hidden">
  <h4>Using external stylesheets</h4>
<p>Instead of inling the bento component styles, you can also link to an external stylesheet:</p>
  ${codeBlock(`<script type="module" src="https://cdn.ampproject.org/v0/${componentName}-1.0.mjs"></script>
<script type="nomodule"  src="https://cdn.ampproject.org/v0/${componentName}-1.0.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.ampproject.org/v0/${componentName}-1.0.css"/>`)}
  <h4>Browsers not supporting web components</h4>
  <p>If you need to support older browsers, which do not yet support <a href="https://caniuse.com/?search=web%20components">
  webcomponents v1</a>, you need to load the bento runtime synchronously to ensure that 
  webcomponents can be polyfilled:</p>
  ${codeBlock(`<script src="https://cdn.ampproject.org/bento.js"></script>`)}
  <p>Component scripts scripts can be loaded asyncronously. Styles can be either inlined:</p>
  ${codeBlock(`<script src="https://cdn.ampproject.org/v0/${componentName}-1.0.js"></script>
<style>${await fetchComponentStyles(componentName)}</style>`)}
<p>...or imported via stylesheet:</p>
  ${codeBlock(`<script src="https://cdn.ampproject.org/v0/${componentName}-1.0.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.ampproject.org/v0/${componentName}-1.0.css"/>`)}
  <h3>Importing Bento components via NPM<h3>

  </section>
</div>`;
}

async function fetchComponentStyles(componentName) {
  const componentStylesUrl = `https://cdn.ampproject.org/v0/${componentName}-1.0.css`;
  const response = await fetch(componentStylesUrl, {
    headers: {
      cookie: '__Host-AMP_OPT_IN=beta',
    },
  });
  if (!(await response).ok) {
    throw new Error(
      `Failed downloading component styles ${componentStylesUrl} with status ${
        (await response).status
      }`
    );
  }
  const styles = await response.text();
  return csso.minify(styles).css;
}

function codeBlock(string) {
  return `<pre class="language-html"><code class="language-html">${Prism.highlight(
    string,
    Prism.languages.html,
    'html'
  )}</code></pre>`;
}

module.exports = componentImportShortcode;
