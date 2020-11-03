const _ = require('lodash');

const { recipes } = require('../static_data/recipes.json');
const BrewInstanceService = require('./brew_instance');

module.exports = {
  getRecipe(recipeId) {
    return _.find(recipes, { id: recipeId });
  },

  getRecipeForFerment(fermentId) {
    const brewInstance = BrewInstanceService.getBrewInstanceByFerment(fermentId);
    return _.find(recipes, { id: brewInstance.recipe });
  },

  listRecipes() {
    return recipes;
  },
};
