const fs = require('fs/promises');
const path = require('path');
const fg = require('fast-glob');
const chalk = require('chalk');

const EXTENSIONS_SRC = path.resolve(__dirname, '..', 'amphtml/extensions');
const COMPONENTS_SRC = path.resolve(__dirname, '..', 'amphtml/src/bento/components');
const EXAMPLES_DEST = path.resolve(
  __dirname,
  '..',
  'assets/iframes/hero-examples'
);
const PATH_COMPONENT_NAME_PATTERN = /amphtml\/(?:extensions)|(?:src\/bento\/components)\/(.*?)\//m;

async function importHeroExamples() {
  const filePaths = await fg([
    path.join(EXTENSIONS_SRC, '**/1.0/example/**/*'),
    path.join(COMPONENTS_SRC, '**/1.0/example/**/*'),
  ]);
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
          console.log('invalid', filePath, componentName);
          chalk.bold.yellow('Unknown component path pattern:', filePath);
          resolve();
          return;
        }

        componentName = componentName[1].replace('amp-', 'bento-');

        const exampleDest = path.join(EXAMPLES_DEST, componentName);
        await fs.mkdir(exampleDest, {recursive: true});

        const fileSrc = filePath.split(`/example/`)[1];
        const fileDest = path.join(exampleDest, fileSrc);
        asyncOps.push(
          fs.copyFile(filePath, fileDest).then(() => {
            console.log(
              chalk.dim('[Import hero examples]'),
              `Imported ${componentName}: ${fileSrc}`
            );
          })
        );

        resolve();
      })
    );
  }

  await Promise.all(asyncOps);
  console.log(chalk.dim('[Import hero examples]'), chalk.green.bold('Done.'));
}

module.exports = async () => {
  await importHeroExamples();
};
