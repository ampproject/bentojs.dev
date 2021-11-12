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
const chalk = require('chalk');

const EXTENSIONS_SRC = path.resolve(__dirname, '..', 'amphtml/extensions');
const EXAMPLES_DEST = path.resolve(__dirname, '..', 'assets/iframes/hero-examples');

const PATH_COMPONENT_NAME_PATTERN = /amphtml\/extensions\/(.*?)\//gm

async function importHeroExamples() {
  const filePaths = await fg(path.join(EXTENSIONS_SRC, '**/1.0/example/**/*'));
  if (!filePaths.length) {
    console.error(
      chalk.dim('[Import hero examples]'),
      chalk.bold.yellow('Please make sure the git submodule amphtml is cloned.')
    );
    return;
  }

  const asyncOps = [];
  for (const filePath of filePaths) {
    asyncOps.push(
      new Promise(async (resolve, reject) => {
        let componentName = PATH_COMPONENT_NAME_PATTERN.exec(filePath);
        if (!componentName || !componentName[1]) {
          chalk.bold.yellow('Unknown component path pattern:', filePath);
          resolve();
          return;
        }

        componentName = componentName[1];

        const exampleDest = path.join(EXAMPLES_DEST, componentName);
        await fs.mkdir(exampleDest, { recursive: true });

        const fileDest = path.join(exampleDest, filePath.split(`/example/`)[1]);
        console.log(fileDest)
        asyncOps.push(fs.copyFile(filePath, fileDest));

        resolve();
      })
    );
  }

  await Promise.allSettled(asyncOps);
  console.log(chalk.dim('[Import hero examples]'), chalk.green.bold('Done.'));
}

module.exports = async () => {
  await importHeroExamples();
};
