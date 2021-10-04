const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const toc = require('eleventy-plugin-toc');

const noOpShortCode = require('./shortcodes/NoOp.js');
const insertStyles = require('./transforms/insertStyles.js');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addWatchTarget('./assets/**/*.css');

  eleventyConfig.addPairedShortcode('tip', noOpShortCode);

  eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor));
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(toc);

  eleventyConfig.addTransform('insert-styles', insertStyles);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'site',
      output: 'dist',
    },
  };
};
