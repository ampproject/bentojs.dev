const execa = require('execa');

async function develop() {
  await execa.command('eleventy --serve', {
    stderr: 'inherit',
    stdout: 'inherit',
  });
}

async function build() {
  await execa.command('eleventy', {
    stderr: 'inherit',
    stdout: 'inherit',
  });
}

module.exports = {
  develop,
  build,
}