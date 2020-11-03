const _ = require('lodash');

const { ferments } = require('../static_data/ferments.json');
const BrewInstanceService = require('./brew_instance');

module.exports = {
  getFerment(fermentId) {
    return _.find(ferments, { id: fermentId });
  },

  listFerments() {
    return ferments;
  },

  listFermentsByRecipe(recipeId) {
    const brewInstances = BrewInstanceService.listBrewInstancesByRecipe(recipeId);
    return _.filter(ferments, (ferment) => {
      return _.some(brewInstances, { ferment: ferment.id });
    });
  },

  listFermentsByVessel(vesselId) {
    return _.filter(ferments, (ferment) => {
      return _.some(ferment.vessels, { vessel: vesselId })
    });
  },
};
