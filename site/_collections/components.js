module.exports = (collectionApi) => {
  const components = collectionApi.getFilteredByGlob('site/en/components/*.md');

  components.sort((a, b) => a.data.title.localeCompare(b.data.title));

  return components;
};
