const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginRss = require('@11ty/eleventy-plugin-rss');

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const toc = require('eleventy-plugin-toc');

const imageShortcode = require('./site/_shortcodes/Image.js');
const iframeShortcode = require('./site/_shortcodes/Iframe.js');
const noOpShortCode = require('./site/_shortcodes/NoOp.js');
const {
  exampleShortCode,
  writeExamples,
} = require('./site/_shortcodes/Example.js');
const {heroExampleShortcode} = require('./site/_shortcodes/HeroExample.js');

const {i18n} = require('./site/_filters/i18n');
const md = require('./site/_filters/md');
const date = require('./site/_filters/date.js');

const insertStyles = require('./site/_transforms/insertStyles.js');

const components = require('./site/_collections/components.js');
const componentCategories = require('./site/_collections/componentCategories.js');
const highlights = require('./site/_collections/highlights.js');
const guides = require('./site/_collections/guides.js');

const notFound = require('./site/_config/404.js');

const isProduction = process.env.NODE_ENV === 'production';
global.__basedir = __dirname;

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addWatchTarget('./assets/**/*.css');
  eleventyConfig.addWatchTarget('./assets/**/*.js');

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
    })
      .use(markdownItAnchor)
      .disable('code')
  );

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(toc);

  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
  eleventyConfig.addShortcode('iframe', iframeShortcode);
  eleventyConfig.addJavaScriptFunction('image', imageShortcode);
  eleventyConfig.addPairedShortcode('tip', noOpShortCode);
  eleventyConfig.addNunjucksTag('examples', exampleShortCode);
  eleventyConfig.addNunjucksTag('heroexample', heroExampleShortcode);

  eleventyConfig.addFilter('date', date);
  eleventyConfig.addFilter('i18n', i18n);
  eleventyConfig.addFilter('md', md);

  eleventyConfig.addTransform('insert-styles', insertStyles);

  eleventyConfig.addCollection('components', components);
  eleventyConfig.addCollection('componentCategories', componentCategories);
  eleventyConfig.addCollection('highlights', highlights);
  eleventyConfig.addCollection('guides', guides);

  eleventyConfig.on('afterBuild', writeExamples);

  eleventyConfig.setBrowserSyncConfig(notFound);

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
