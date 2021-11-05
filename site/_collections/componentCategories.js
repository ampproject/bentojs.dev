const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const componentsCollection = require('./components');

const categoryMapping = yaml.load(
  fs.readFileSync(
    path.join(__dirname, '../_data/component-categories.yaml'),
    'utf8'
  )
);

module.exports = (collectionApi) => {
  const components = componentsCollection(collectionApi);
  const categories = [];
  for (const categoryId of Object.keys(categoryMapping)) {
    const category = {
      id: categoryId,
      components: [],
    };
    categories.push(category);
    for (const component of components) {
      if (categoryMapping[categoryId].includes(component.data.id)) {
        category.components.push(component);
      }
    }
  }
  return categories;
};
