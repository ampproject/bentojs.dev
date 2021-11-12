const fs = require('fs/promises');
const path = require('path');
const fg = require('fast-glob');
const matter = require('gray-matter');
const chalk = require('chalk');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const { split } = require('sentence-splitter');

const EXTENSIONS_SRC = path.resolve(__dirname, '..', 'amphtml/extensions');
const COMPONENTS_DEST = path.resolve(__dirname, '..', 'site/en/components');
const IGNORED_COMPONENTS = new Set(['bento-iframe']);
const md = markdownIt({
  html: true,
})
  .use(markdownItAnchor)
  .disable('code');

function _injectHeroExamples(content, componentName) {
  return content.replace(/# Bento .+/, (match) => {
    return `${match}\n\n{% heroexample '${componentName}' %}`;
  });
}

function _rewriteExamples(string) {
  const lines = string.split('\n');
  let result = '';
  let startExample = false;
  let endExample = false;
  for (let line of lines) {
    if (line.match(/<!--%\s+example\s+%--/)) {
      line = '{% example %}';
      startExample = true;
      endExample = false;
    } else if (line.trim().startsWith('```')) {
      if (startExample) {
        startExample = false;
        endExample = true;
      } else if (endExample) {
        line += '{% endexample %}';
        endExample = false;
      }
    }
    result += line + '\n';
  }
  return result;
};

function _extractDescription(string) {
  const tokens = md.parse(string, {});
  let inParagraph = false;
  for (const token of tokens) {
    if (token.type === 'paragraph_open') {
      inParagraph = true;
    } else if (inParagraph && token.type === 'inline') {
      const desc = md.renderInline(token.content);
      const sentences = split(desc);
      const firstSentence = sentences[0].raw;
      return firstSentence;
    }
  }
  return '';
};

function _rewriteCalloutToTip(contents) {
  const CALLOUT_PATTERN =
    /{% call callout\('.*?', type='(.*?)'\) %}(.*?){% endcall %}/gs;
  const AVAILABLE_CALLOUT_TYPES = {
    'note': 'note',
    'read': 'read-on',
    'caution': 'important',
    'success': 'success',
  };

  contents = contents.replace(CALLOUT_PATTERN, (match, type, text) => {
    return `{% tip '${AVAILABLE_CALLOUT_TYPES[type]}' %}${text}{% endtip %}`;
  });

  return contents;
}

function _escapeVariables(contents) {
  // This expression matches a {% raw %}...{% endraw %} block
  const JINJA2_RAW_BLOCK =
    /\{%\s*raw\s*%\}(?:(?!\{%\s*endraw\s*%\})[\s\S])*\{%\s*endraw\s*%\}/;

  // This expression matches source code blocks. fenced blocks are converted to this syntax
  const SOURCECODE_BLOCK =
    /\[\s*sourcecode[^\]]*\][\s\S]*?\[\s*\/\s*sourcecode\s*\]/;

  // we search for ALL code blocks, and at the same time for raw blocks
  // to ensure we do not match something that belongs to different code blocks
  // or we add raw tags to existing raw blocks
  const MARKDOWN_BLOCK_PATTERN = new RegExp(
    JINJA2_RAW_BLOCK.source +
    '|' +
    SOURCECODE_BLOCK.source +
    '|' +
    /`[^`]*`/.source,
    'g'
  );

  // Inside code blocks we search for mustache expressions
  // The constant 'server_for_email' and expressions with a dot or a bracket are not considered mustache
  // TODO: Avoid the need to distinguish between mustache and jinja2
  const MUSTACHE_PATTERN = new RegExp(
    '(' +
    JINJA2_RAW_BLOCK.source +
    '|' +
    /\{\{(?!\s*server_for_email\s*\}\})(?:[\s\S]*?\}\})?/.source +
    ')',
    'g'
  );

  return contents.replace(MARKDOWN_BLOCK_PATTERN, (block) => {
    // check for mustache tags only if we have no raw block
    if (!block.startsWith('{')) {
      block = block.replace(MUSTACHE_PATTERN, (part) => {
        // again, only if it is a mustache block wrap it with raw
        if (part.startsWith('{{')) {
          part = '{% raw %}' + part + '{% endraw %}';
        }
        return part;
      });
    }
    return block;
  });
}

function _rewriteCodeFenceShToBash(contents) {
  return contents.replace(/```sh(\s.*?\s)```/gm, '```bash$1```');
}

function _parseComponentName(content) {
  const matches = /# (Bento .+)/gm.exec(content);
  return matches[1];
}

async function importComponents() {
  const filePaths = await fg(path.join(EXTENSIONS_SRC, '**/1.0/README.md'));
  if (!filePaths.length) {
    console.error(
      chalk.dim('[Import components]'),
      chalk.bold.yellow('Please make sure the git submodule amphtml is cloned.')
    );
    return;
  }

  const imports = [];
  for (const filePath of filePaths) {
    imports.push(
      new Promise(async (resolve, reject) => {
        const componentName = path
          .basename(path.dirname(path.dirname(filePath)))
          .replace('amp-', 'bento-');
        if (IGNORED_COMPONENTS.has(componentName)) {
          console.log(
            chalk.dim('[Import components]'),
            chalk.bold.yellow(`Ignoring ${componentName}`)
          );
          return resolve();
        }
        const file = await fs.readFile(filePath);
        const document = matter(file);

        const name = _parseComponentName(document.content);

        document.data.id = componentName;
        document.data.title = name;
        document.data.short_title = name.replace('Bento ', '');
        document.data.layout = 'layouts/component.njk';
        document.data.description = _extractDescription(document.content);

        document.content = _rewriteCalloutToTip(document.content);
        document.content = _escapeVariables(document.content);
        document.content = _rewriteExamples(document.content);
        document.content = _rewriteCodeFenceShToBash(document.content);
        document.content = _injectHeroExamples(document.content, componentName);

        await fs.writeFile(
          path.join(COMPONENTS_DEST, `${fileName}.md`),
          document.stringify()
        );

        console.log(chalk.dim('[Import components]'), `Imported ${name}`);
        resolve();
      })
    );
  }

  await Promise.allSettled(imports);
  console.log(chalk.dim('[Import components]'), chalk.green.bold('Done.'));
}

module.exports = async () => {
  await importComponents();
};
