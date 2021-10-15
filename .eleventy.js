const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const toc = require('eleventy-plugin-toc');

const imageShortcode = require('./shortcodes/Image.js');
const noOpShortCode = require('./shortcodes/NoOp.js');
const {exampleShortCode, writeExamples} = require('./shortcodes/Example.js');

const insertStyles = require('./transforms/insertStyles.js');

const isProduction = process.env.NODE_ENV === 'production';
global.__basedir = __dirname;

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addWatchTarget('./assets/**/*.css');

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
    })
      .use(markdownItAnchor)
      .disable('code')
  );

  eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor));
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(toc);

  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
  eleventyConfig.addJavaScriptFunction('image', imageShortcode);
  eleventyConfig.addPairedShortcode('tip', noOpShortCode);
  eleventyConfig.addNunjucksTag('examples', exampleShortCode);

  eleventyConfig.addTransform('insert-styles', insertStyles);

  eleventyConfig.on('afterBuild', writeExamples);

  return {
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'site',
      output: 'dist',
    },
  };
};
