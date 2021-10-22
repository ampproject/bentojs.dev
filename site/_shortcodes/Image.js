const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, sizes = ['100vw']) {
  const formats = src.endsWith('.png') ? ['png', 'avif'] : ['jpeg', 'avif'];

  const metadata = await Image(src, {
    urlPath: '/assets/img/',
    outputDir: './dist/assets/img/',
    widths: [100, 300, 600, null],
    formats,
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
}

module.exports = imageShortcode;
