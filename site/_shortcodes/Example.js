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
const espree = require('espree');
const execa = require('execa');

const examples = [];
let counter = {};

class Example {
  constructor(nunjucksEngine, context, raw) {
    this.renderer = nunjucksEngine;

    this.context = context;
    this.raw = raw;

    this.title = context.title;
    this.slug = context.page.fileSlug;
    counter[this.slug] = counter[this.slug] + 1 || 0;
    this.id = `${this.slug}-${counter[this.slug]}`;

    this.parsed = {
      webComponents: this._parseHtml(),
      react: this._parseJavaScript(),
    }

    this.previews = this._renderPreviews();
    this.widget = this._renderWidget();
  }

  _extract(regExp, string) {
    const match = regExp.exec(string);
    return match && match[1] ? match[1] : '';
  }

  _parseCode(language, string) {
    const code = {
      all: this._extract(new RegExp('```' + language + '\n(.*?)\n```', 'gms'), string),
    };

    return code;
  }

  _parseHtml() {
    const html = this._parseCode('html', this.raw);
    if (!html.all) {
      return null;
    }

    html.head = this._extract(/<head>(.*?)<\/head>/gms, html.all).trim();
    html.body = this._extract(/<body>(.*?)<\/body>/gms, html.all).trim();

    return html;
  }

  _parseJavaScript() {
    const js = this._parseCode('javascript', this.raw);
    if (!js.all) {
      return null;
    }

    let ast = {};
    try {
      ast = espree.parse(js.all, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        }
      });
    } catch (e) {
      console.error(`[Examples] Could not retrieve AST for ${this.fileSlug}`);
      return null;
    }

    js.imports = ast.body.filter((node) => {
      return node.type === 'ImportDeclaration'
    }).map((node) => {
      return js.all.substring(node.start, node.end);
    });

    js.app = ast.body.find((node) => {
      return node.type === 'FunctionDeclaration'
    });

    if (!js.app) {
      console.warn(`[Examples] No function in ${this.fileSlug}`);
      return null;
    }

    js.appName = js.app.id.name;
    js.app = js.all.substring(js.app.start, js.app.end);

    return js;
  }

  _renderPreviews() {
    const previews = {};
    if (this.parsed.webComponents) {
      previews.webComponents = this.renderer.render('site/_includes/layouts/example.njk', {
        id: this.id,
        html: this.parsed.webComponents,
        title: this.title,
      });
    }

    if (this.parsed.react) {
      previews.react = this.renderer.render('site/_includes/files/componentExample.js.njk', {
        imports: this.parsed.react.imports,
        app: this.parsed.react.app,
        appName: this.parsed.react.appName,
        title: this.title,
      });
    }

    return previews;
  }

  _renderWidget() {
    if (!this.parsed.webComponents && !this.parsed.react) {
      return this.raw;
    }

    let html = {};
    let iframe = null;
    if (this.parsed.webComponents) {
      html = {
        head: Prism.highlight(this.parsed.webComponents.head, Prism.languages.html, 'html'),
        body: Prism.highlight(this.parsed.webComponents.body, Prism.languages.html, 'html'),
      }

      iframe = `/assets/iframes/webcomponents/${this.id}.html`;
    }

    let js;
    if (this.parsed.react) {
      js = Prism.highlight(this.parsed.react.all, Prism.languages.js, 'js');

      iframe = `/assets/iframes/react/${this.id}.html`;
    }

    return this.renderer.render('site/_includes/partials/example.njk', {
      hero: false,
      id: this.id,
      source: this.raw,
      html: html,
      js: js,
      iframe,
      title: this.title,
    });
  }

  writePreviews() {
    const fsOps = [];
    if (this.previews.webComponents) {
      fsOps.push(fs.writeFile(
        path.join(
          `${global.__basedir}/dist/assets/iframes/webcomponents`,
          `${this.id}.html`
        ),
        this.previews.webComponents
      ));
    }

    if (this.previews.react) {
      fsOps.push(fs.writeFile(
        path.join(
          `${global.__basedir}/examples/react/pages`,
          `${this.id}.js`
        ),
        this.previews.react
      ));
    }

    return Promise.all(fsOps);
  }
}

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


    this.run = function (context, contents, callback) {
      const example = new Example(nunjucksEngine, context.ctx, contents());
      examples.push(example);

      callback(null, nunjucksEngine.runtime.markSafe(example.widget));
    };
  })();
}

async function writeExamples() {
  console.log('[Examples] Writing examples ...');
  await Promise.all(
    examples.map((example) => example.writePreviews())
  );
  counter = {};
  console.log('[Examples] Wrote examples!');

  console.log('[Examples] Building react examples ...');
  await execa.command('npx next build examples/react');
  console.log('[Examples] Exporting react examples to dist ...');
  await execa.command('npx next export -o dist/assets/iframes/react examples/react');
  console.log('[Examples] Finished building and exporting react examples!');
}

module.exports = {
  exampleShortCode,
  writeExamples,
};
