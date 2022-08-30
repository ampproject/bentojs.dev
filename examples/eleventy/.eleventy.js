const pluginHead = require('eleventy-plugin-head');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHead);
  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary('md', markdownIt(options));

  eleventyConfig.addShortcode('importBento', function (componentName) {
    pluginHead.head.add(
      this.page.inputPath,
      'bento-runtime',
      `<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>`
    );
    pluginHead.head.add(
      this.page.inputPath,
      'bento-' + componentName,
      `<script type="module" src="https://cdn.ampproject.org/v0/bento-${componentName}-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-${componentName}-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-${componentName}-1.0.css" crossorigin="anonymous">`
    );
    return '';
  });
};
