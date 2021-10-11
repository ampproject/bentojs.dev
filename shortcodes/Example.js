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
const path = require('path');
const Prism = require('prismjs');
const md = require('markdown-it')();

const examples = [];
const heads = {};
let counter = {};

function exampleShortCode(nunjucksEngine) {
  return new function () {
    this.tags = ['example'];

    this.parse = function (parser, nodes, lexer) {
      let tok = parser.nextToken();

      let args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);

      let body = parser.parseUntilBlocks('endexample');
      parser.advanceAfterBlockEnd();

      return new nodes.CallExtensionAsync(this, 'run', args, [body]);
    };

    this._parseContents = function (contents) {
      const HTML_CODE_PATTERN = /```html\n(.*?)\n```/gms;
      const html = {
        all: HTML_CODE_PATTERN.exec(contents)
      };
      html.all = html.all && html.all[1] ? html.all[1] : undefined;

      if (!html.all) {
        // We only support HTML examples. If the example doesn't
        // contain HTML, simply return
        return {};
      }

      const HTML_HEAD_PATTERN = /<head>(.*?)<\/head>/gms;
      html.head = HTML_HEAD_PATTERN.exec(html.all);
      html.head = html.head && html.head[1] ? html.head[1] : undefined;

      const HTML_BODY_PATTERN = /<body>(.*?)<\/body>/gms;
      html.body = HTML_BODY_PATTERN.exec(html.all);
      html.body = html.body && html.body[1] ? html.body[1] : undefined;

      // If there is no body, take all of the HTML, but discard the head
      html.body = html.all.replace(HTML_HEAD_PATTERN, '');

      // Check if there is dedicated CSS code that needs to be merged
      // into the head
      const CSS_CODE_PATTERN = /```css\n(.*?)\n```/gms;
      html.css = CSS_CODE_PATTERN.exec(contents);
      html.css = html.css && html.css[1] ? html.css[1] : undefined;

      return html;
    }

    this.run = function (context, contents, callback) {
      // Build a reusable ID for file names and radio buttons
      const ctx = context.ctx;
      counter[ctx.page.fileSlug] = counter[ctx.page.fileSlug] + 1 || 0;
      const id = `${ctx.page.fileSlug}-${counter[ctx.page.fileSlug]}`;

      const html = this._parseContents(contents());
      // Verify the parsed HTML includes a HTML snippet, otherwise
      // do not generate an iframe
      let iframe;
      if (html.all) {
        iframe = nunjucksEngine.render('site/_includes/layouts/example.njk', { id, html, title: ctx.title });
        examples.push({ id, iframe });
      }

      let widget = contents();
      if (html.all) {
        widget = nunjucksEngine.render(
          'site/_includes/partials/example.njk',
          { id, source: contents(), iframe: !!iframe, title: ctx.title }
        );
      }

      callback(null, nunjucksEngine.runtime.markSafe(widget));
    }
  };
}

async function writeExamples() {
  console.log('Writing examples ...');
  await Promise.all(examples.map((example) => {
    return fs.writeFile(path.join(`${global.__basedir}/dist/assets/iframes`, `${example.id}.html`), example.iframe);
  })).then(() => {
    counter = {};
    console.log('Wrote examples!');
  })
}

module.exports = {
  exampleShortCode,
  writeExamples
};
