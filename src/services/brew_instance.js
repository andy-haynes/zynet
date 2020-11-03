const _ = require('lodash');

const { brew_instances } = require('../static_data/brew_instances.json');

module.exports = {
  getBrewInstance(instanceId) {
    return _.find(brew_instances, { id: instanceId });
  },

  getBrewInstanceByFerment(fermentId) {
    return _.find(brew_instances, { ferment: fermentId });
  },

  listBrewInstances() {
    return brew_instances;
  },

  listBrewInstancesByRecipe(recipeId) {
    return _.filter(brew_instances, { recipe: recipeId });
  },
};
