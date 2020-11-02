const _ = require('lodash');

const { recipes } = require('../static_data/recipes.json');
const BrewInstanceService = require('./brew_instance');

module.exports = {
  getRecipe(recipeId) {
    return _.first(recipes, { id: recipeId });
  },

  getRecipeForFerment(fermentId) {
    const brewInstance = BrewInstanceService.getBrewInstanceByFerment(fermentId);
    return _.first(recipes, { id: brewInstance.recipe });
  },

  listRecipes() {
    return recipes;
  },
};
