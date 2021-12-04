const fs = require('fs');
const path = require('path');
const heroExampleDir = path.join(
  __dirname,
  '/../../assets/iframes/hero-examples/'
);

let heroExamples = fs.readdirSync(heroExampleDir);

heroExamples = heroExamples
  .filter((fileName) => fileName !== 'bento-iframe')
  .map((fileName) => {
    const selected = fileName === 'bento-base-carousel';
    return {
      name: fileName,
      selected,
      path: path.join('/assets/iframes/hero-examples', fileName),
    };
  });

module.exports = heroExamples;
