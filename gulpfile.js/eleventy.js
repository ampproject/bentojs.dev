const execa = require('execa');

async function develop() {
  await execa.command('npm run serve', {
    stderr: 'inherit',
    stdout: 'inherit',
  });
}

async function build() {
  await execa.command('npm run build:eleventy', {
    stderr: 'inherit',
    stdout: 'inherit',
  });
}

module.exports = {
  develop,
  build,
};
