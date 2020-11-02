const _ = require('lodash');

const { brew_instances } = require('./static_data/brew_instances.json');
const { ferments } = require('./static_data/ferments.json');
const { fermentation_vessels } = require('./static_data/fermentation_vessels.json');
const { recipes } = require('./static_data/recipes.json');

module.exports = {
  Query: {
    brewDays: () => brew_instances,
    fermentationVessels: () => fermentation_vessels,
    recipes: () => recipes,
  },
  Recipe: {
    brewInstances: (parent) => _.filter(brew_instances, { recipe: parent.id }),
    ferments: (parent) => _.filter(ferments, (ferment) => {
      return _.some(brew_instances, {
        ferment: ferment.id,
        recipe: parent.id,
      });
    }),
  },
  BrewInstance: {
    ferment: (parent) => _.first(ferments, { id: parent.ferment }),
    recipe: (parent) => _.first(recipes, { id: parent.recipe }),
  },
  Ferment: {
    brewDay: (parent) => _.first(brew_instances, { ferment: parent.id }),
    recipe: (parent) => _.first(recipes, (recipe) => {
      return _.some(brew_instances, {
        ferment: parent.id,
        recipe: recipe.id,
      });
    }),
    vessels: (parent) => _.filter((fermentation_vessels), (vessel) => {
      return _.some(parent.vessels, { vessel: vessel.id });
    }),
  },
  FermentationVessel: {
    ferments: (parent) => _.filter(ferments, (ferment) => {
      return _.some(ferment.vessels, { vessel: parent.id })
    }),
  },
};
