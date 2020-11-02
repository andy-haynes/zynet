const _ = require('lodash');

const {
  BrewInstanceService,
  FermentService,
  FermentationVesselService,
  RecipeService,
} = require('./services');

module.exports = {
  BrewInstance: {
    ferment: (parent) => FermentService.getFerment(parent.ferment),
    recipe: (parent) => RecipeService.getRecipe(parent.recipe),
  },
  Ferment: {
    brewDay: (parent) => BrewInstanceService.getBrewInstanceByFerment(parent.id),
    recipe: (parent) => RecipeService.getRecipeForFerment(parent.id),
    vessels: (parent) => FermentationVesselService.getVesselsByIds(_.map(parent.vessels, 'vessel')),
  },
  FermentationVessel: {
    ferments: (parent) => FermentService.getFermentsByVessel(parent.id),
  },
  Query: {
    brewDay: (brewInstanceId) => BrewInstanceService.getBrewInstance(brewInstanceId),
    brewDays: () => BrewInstanceService.getBrewInstances(),
    ferment: (fermentId) => FermentService.getFerment(fermentId),
    ferments: () => FermentService.getFerments(),
    fermentationVessel: (vesselId) => FermentationVesselService.getVessel(vesselId),
    fermentationVessels: () => FermentationVesselService.getVessels(),
    recipe: (recipeId) => RecipeService.getRecipe(recipeId),
    recipes: () => RecipeService.getRecipes(),
  },
  Recipe: {
    brewInstances: (parent) => BrewInstanceService.getBrewInstancesByRecipe(parent.id),
    ferments: (parent) => FermentService.getFermentsByRecipe(parent.id),
  },
};
