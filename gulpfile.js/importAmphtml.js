const execa = require('execa');

async function importAmphtml() {
  await execa.command('git submodule update --remote', {
    stderr: 'inherit',
    stdout: 'inherit',
  });
}

module.exports = importAmphtml;
