const _ = require('lodash');

const {
  BrewInstanceService,
  FermentService,
  FermentationVesselService,
  IngredientService,
  RecipeService,
  StyleService,
} = require('./services');

module.exports = {
  BrewInstance: {
    ferment: (parent) => FermentService.getFerment(parent.ferment),
    recipe: (parent) => RecipeService.getRecipe(parent.recipe),
  },
  Ferment: {
    brewInstance: (parent) => BrewInstanceService.getBrewInstanceByFerment(parent.id),
    recipe: (parent) => RecipeService.getRecipeForFerment(parent.id),
    vessels: (parent) => FermentationVesselService.listVesselsByIds(_.map(parent.vessels, 'vessel')),
  },
  FermentationVessel: {
    ferments: (parent) => FermentService.listFermentsByVessel(parent.id),
  },
  IngredientResults: {
    fermentables: (parent, args) => IngredientService.listFermentables(args.ingredientSearch),
    hops: (parent, args) => IngredientService.listHops(args.ingredientSearch),
    yeast: (parent, args) => IngredientService.listYeast(args.ingredientSearch),
  },
  Query: {
    brewInstance: (parent, { brewInstanceId }) => BrewInstanceService.getBrewInstance(brewInstanceId),
    brewInstances: () => BrewInstanceService.listBrewInstances(),
    ferment: (parent, { fermentId }) => FermentService.getFerment(fermentId),
    ferments: () => FermentService.listFerments(),
    fermentationVessel: (parent, { fermentationVesselId }) => FermentationVesselService.getVessel(fermentationVesselId),
    fermentationVessels: () => FermentationVesselService.listVessels(),
    ingredients: () => ({}),
    recipe: (parent, { recipeId }) => RecipeService.getRecipe(recipeId),
    recipes: () => RecipeService.listRecipes(),
    style: (parent, { styleId }) => StyleService.getStyle(styleId),
    styles: () => StyleService.listStyles(),
  },
  Recipe: {
    brewInstances: (parent) => BrewInstanceService.listBrewInstancesByRecipe(parent.id),
    ferments: (parent) => FermentService.listFermentsByRecipe(parent.id),
    style: (parent) => StyleService.getStyle(parent.style),
  },
};
