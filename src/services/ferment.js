const _ = require('lodash');

const { ferments } = require('../static_data/ferments.json');
const BrewInstanceService = require('./brew_instance');

module.exports = {
  getFerment(fermentId) {
    return _.first(ferments, { id: fermentId });
  },

  getFerments() {
    return ferments;
  },

  getFermentsByRecipe(recipeId) {
    const brewInstances = BrewInstanceService.getBrewInstancesByRecipe(recipeId);
    return _.filter(ferments, (ferment) => {
      return _.some(brewInstances, { ferment: ferment.id });
    });
  },

  getFermentsByVessel(vesselId) {
    return _.filter(ferments, (ferment) => {
      return _.some(ferment.vessels, { vessel: vesselId })
    });
  },
};
