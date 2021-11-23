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
let counter = {};

function exampleShortCode(nunjucksEngine) {
  return new (function () {
    this.tags = ['example'];

    this.parse = function (parser, nodes, lexer) {
      const tok = parser.nextToken();

      const args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);

      const body = parser.parseUntilBlocks('endexample');
      parser.advanceAfterBlockEnd();

      return new nodes.CallExtensionAsync(this, 'run', args, [body]);
    };

    this._parseContents = function (contents) {
      const HTML_CODE_PATTERN = /```html\n(.*?)\n```/gms;
      const html = {
        all: HTML_CODE_PATTERN.exec(contents),
      };
      html.all = html.all && html.all[1] ? html.all[1] : undefined;

      if (!html.all) {
        // We only support HTML examples. If the example doesn't
        // contain HTML, simply return
        return {};
      }

      const HTML_HEAD_PATTERN = /<head>(.*?)<\/head>/gms;
      html.head = HTML_HEAD_PATTERN.exec(html.all);
      html.head = html.head && html.head[1] ? html.head[1] : '';
      if (!html.head) {
        return {};
      }

      const HTML_BODY_PATTERN = /<body>(.*?)<\/body>/gms;
      html.body = HTML_BODY_PATTERN.exec(html.all);
      html.body = html.body && html.body[1] ? html.body[1] : '';

      // Make sure head and body both don't contain any blank lines
      // as they would create empty paragraphs in markdown
      html.head = html.head.replace(/^\s*\n/gm, '');
      html.body = html.body.replace(/^\s*\n/gm, '');

      return html;
    };

    this.run = function (context, contents, callback) {
      // Build a reusable ID for file names and radio buttons
      const ctx = context.ctx;
      counter[ctx.page.fileSlug] = counter[ctx.page.fileSlug] + 1 || 0;
      const id = `${ctx.page.fileSlug}-${counter[ctx.page.fileSlug]}`;

      const html = this._parseContents(contents());

      let iframe;
      if (html.head && html.body) {
        iframe = nunjucksEngine.render('site/_includes/layouts/example.njk', {
          id,
          html,
          title: ctx.title,
        });
        examples.push({ id, iframe });
      }

      let widget = contents();
      if (html.head && html.body) {
        widget = nunjucksEngine.render('site/_includes/partials/example.njk', {
          id,
          source: widget,
          hero: false,
          head: Prism.highlight(html.head, Prism.languages.html, 'html'),
          body: Prism.highlight(html.body, Prism.languages.html, 'html'),
          iframe: iframe ? `/assets/iframes/${id}.html` : false,
          title: ctx.title,
        });
      }

      callback(null, nunjucksEngine.runtime.markSafe(widget));
    };
  })();
}

async function writeExamples() {
  console.log('Writing examples ...');
  await Promise.all(
    examples.map((example) => {
      return fs.writeFile(
        path.join(
          `${global.__basedir}/dist/assets/iframes`,
          `${example.id}.html`
        ),
        example.iframe
      );
    })
  ).then(() => {
    counter = {};
    console.log('Wrote examples!');
  });
}

module.exports = {
  exampleShortCode,
  writeExamples,
};
