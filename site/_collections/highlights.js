const componentsCollection = require('./components');

const highlightIds = new Set([
  'bento-lightbox-gallery',
  'bento-accordion',
  'bento-sidebar',
  'bento-base-carousel',
]);
const highlightColors = [
  'bd-card--light-sea-green',
  'bd-card bd-card--elephant-green',
  'bd-card--burnt-sienna',
  'bd-card--naples-yellow',
];

module.exports = (collectionApi) => {
  const highlights = highlightColors.map((color) => {
    return {
      component: null,
      class: color,
    };
  });
  const components = componentsCollection(collectionApi);
  let count = 0;
  for (const component of components) {
    if (highlightIds.has(component.data.id)) {
      highlights[count].component = component;
      count++;
    }
  }
  return highlights;
};
