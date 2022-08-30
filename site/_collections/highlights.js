const componentsCollection = require('./components');

const HIGHLIGHTS_IDS = new Set([
  'bento-lightbox-gallery',
  'bento-accordion',
  'bento-sidebar',
  'bento-base-carousel',
  'bento-inline-gallery',
  'bento-lightbox',
]);

module.exports = (collectionApi) => {
  const highlights = [];
  const components = componentsCollection(collectionApi);
  for (const component of components) {
    if (HIGHLIGHTS_IDS.has(component.data.id)) {
      highlights.push(component);
    }
  }
  return highlights;
};
