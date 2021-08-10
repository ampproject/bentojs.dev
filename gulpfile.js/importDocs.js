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
const fg = require('fast-glob');
const matter = require('gray-matter');
const chalk = require('chalk');

const EXTENSIONS_SRC = path.resolve(__dirname, '..', 'amphtml/extensions');
const COMPONENTS_DEST = path.resolve(__dirname, '..', 'site/en/components');

async function importComponents() {
  const filePaths = await fg(path.join(EXTENSIONS_SRC, '**/*.md'));
  if (!filePaths.length) {
    console.error(
      chalk.dim('[Import components]'),
      chalk.bold.yellow('Please make sure the git submodule amphtml is cloned.')
    );
    return;
  }

  const imports = [];
  for (const filePath of filePaths) {
    const fileName = path.basename(filePath, '.md');
    if (
      !fileName.startsWith('amp-') ||
      fileName.endsWith('-impl') ||
      fileName.endsWith('-internal')
    ) {
      continue;
    }

    imports.push(
      new Promise(async (resolve, reject) => {
        const file = await fs.readFile(filePath);
        const document = matter(file);

        if (!document.data.bento) {
          reject(new Error(`${fileName} is not a bento component`));
          return;
        }

        document.data.title = fileName;
        document.data.tags = 'components';
        document.data.layout = 'layouts/component.njk';

        await fs.writeFile(
          path.join(COMPONENTS_DEST, `${fileName}.md`),
          document.stringify()
        );

        console.log(chalk.dim('[Import components]'), `Imported ${fileName}`);
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
