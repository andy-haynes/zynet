const _ = require('lodash');

const { fermentables } = require('../static_data/fermentables.json');
const { hops } = require('../static_data/hops.json');
const { yeast } = require('../static_data/yeast.json');

module.exports = {
  getIngredient(ingredientId) {
    return _.find([
      ...fermentables,
      ...hops,
      ...yeast,
    ], { id: ingredientId });
  },

  listFermentables({ searchTerm }) {
    if (searchTerm) {
      return _.filter(
        fermentables,
        (fermentable) => fermentable.name.toLowerCase().includes(searchTerm)
      );
    }

    return fermentables;
  },

  listHops({ searchTerm }) {
    if (searchTerm) {
      return _.filter(
        hops,
        (hop) => hop.name.toLowerCase().includes(searchTerm)
      );
    }

    return hops;
  },

  listYeast({ searchTerm }) {
    if (searchTerm) {
      return _.filter(
        yeast,
        (y) => y.name.toLowerCase().includes(searchTerm)
      );
    }

    return yeast;
  },
};
