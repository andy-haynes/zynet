const _ = require('lodash');

const { brew_instances } = require('../static_data/brew_instances.json');

module.exports = {
  getBrewInstance(instanceId) {
    return _.first(brew_instances, { id: instanceId });
  },

  getBrewInstanceByFerment(fermentId) {
    return _.first(brew_instances, { ferment: fermentId });
  },

  getBrewInstances() {
    return brew_instances;
  },

  getBrewInstancesByRecipe(recipeId) {
    return _.filter(brew_instances, { recipe: recipeId });
  },
};
