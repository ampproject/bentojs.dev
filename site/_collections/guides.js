module.exports = (collectionApi) => {
  const guides = collectionApi.getFilteredByGlob('site/en/guides/*.md');

  return guides;
};
