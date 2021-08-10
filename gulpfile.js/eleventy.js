const execa = require('execa');

async function develop() {
  await execa('eleventy serve');
}

async function build() {
  await execa('eleventy');
}

module.exports = {
  develop,
  build,
}