const data = require('./static_data/recipes.json');

module.exports = {
  Query: {
    recipes: () => data.recipes,
  },
};
