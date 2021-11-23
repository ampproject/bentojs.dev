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

const EXAMPLES_SRC = path.resolve(
  __dirname,
  '../..',
  'assets/iframes/hero-examples'
);

function heroExampleShortcode(nunjucksEngine) {
  return new (function () {
    this.tags = ['heroexample'];

    this.parse = function (parser, nodes, lexer) {
      const tok = parser.nextToken();

      const args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);

      return new nodes.CallExtensionAsync(this, 'run', args);
    };

    this._loadExample = async function (componentName) {
      try {
        const html = await fs.readFile(
          path.join(EXAMPLES_SRC, componentName, 'index.html')
        );

        const HTML_HEAD_PATTERN = /<head>(.*?)<\/head>/gms;
        let head = HTML_HEAD_PATTERN.exec(html.all);
        head = head && head[1] ? head[1] : undefined;

        const HTML_BODY_PATTERN = /<body>(.*?)<\/body>/gms;
        let body = HTML_BODY_PATTERN.exec(html);
        body = body && body[1] ? body[1] : undefined;

        return {
          head,
          body
        }
      } catch (e) {
        return {};
      }
    };

    this.run = async function (context, componentName, callback) {
      const html = await this._loadExample(componentName);

      let widget = '';
      if (html.head && html.body) {
        widget = nunjucksEngine.render('site/_includes/partials/example.njk', {
          id: `${componentName}-hero`,
          source: exampleBody,
          head: Prism.highlight(html.head, Prism.languages.html, 'html'),
          body: Prism.highlight(html.body, Prism.languages.html, 'html'),
          iframe: `/assets/iframes/hero-examples/${componentName}/`,
          title: `Demo preview for ${componentName}`,
        });
      }

      callback(null, nunjucksEngine.runtime.markSafe(widget));
    };
  })();
}

module.exports = {
  heroExampleShortcode,
};
