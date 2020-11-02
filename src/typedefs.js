const { gql } = require('apollo-server');

module.exports = gql`
    scalar Date
    
    type BrewInstance {
        id: String
        dateRange: DateRange
        ferment: Ferment
        notes: [Note]
        recipe: Recipe
    }
    
    type DateRange {
        startDate: Date!
        endDate: Date
    }

    type EquipmentProfile {
        id: String!
        name: String!
        losses: [Loss]
    }

    type Ferment {
        id: String!
        recipe: Recipe
        brewDay: BrewInstance
        brewInstance: BrewInstance
        dateRange: DateRange!
        gravityDeltas: [GravityDelta]
        notes: [Note]
        vessels: [FermentationVessel]
    }
    
    type Fermentable {
        color: String
        gravity: String
        lovibond: Int
        name: String!
        srm: Float
        weight: Measurement
    }
    
    type FermentationVessel {
        id: String!
        capacity: Measurement!
        ferments: [Ferment]
        name: String!
        type: String!
    }

    type GravityDelta {
        dateRange: DateRange
        finalGravity: String
        originalGravity: String
    }

    type Hop {
        name: String!
        alpha: Float
        beta: Float
        additions: [HopAddition]
        aromaticProfile: [String]
        form: String
    }
    
    type HopAddition {
        minutes: Int
        quantity: Measurement
        type: String
        ibu: Float
        utilization: Float
    }
    
    type IngredientResults {
        fermentables(ingredientSearch: IngredientSearchInput): [Fermentable]
        hops(ingredientSearch: IngredientSearchInput): [Hop]
        yeast(ingredientSearch: IngredientSearchInput): [Yeast]
    }

    input IngredientSearchInput {
        searchTerm: String
    }

    type Loss {
        type: String!
        ratio: Ratio!
    }

    type MashProfile {
        schedule: MashSchedule
    }
    
    type MashRest {
        temperature: Measurement
        minutes: Int
    }
    
    type MashSchedule {
        efficiency: Float
        method: String
        rests: [MashRest]
        sparge: String
    }
    
    type Measurement {
        unit: String!
        value: Float!
    }
    
    type Note {
        timestamp: Date!
        note: String!
    }
    
    type Ratio {
        antecedent: String!
        consequent: String!
        value: Float!
    }
    
    type Recipe {
        id: String!
        name: String!
        style: String
        brewInstances: [BrewInstance]
        fermentables: [Fermentable]
        hops: [Hop]
        yeast: [Yeast]
        mash: MashProfile
        ferments: [Ferment]
    }
    
    type RecipeStyle {
        ABV: String
        appearance: String
        aroma: String
        category: String
        characteristicIngredients: String
        code: String
        comments: String
        commercialExamples: [String]
        FG: String
        flavor: String
        history: String
        IBUs: String
        mouthfeel: String
        name: String
        OG: String
        overallImpression: String
        SRM: String
        styleComparison: String
        tags: [String]
    }
    
    type Yeast {
        name: String!
        code: String
        pitchRate: Float
        pitchTemp: Measurement
        quantity: Int
        targetCellCount: Int
        styles: [String]
    }
    
    type Query {
        brewDay(brewInstanceId: String): BrewInstance
        brewDays: [BrewInstance]
        ferment(fermentId: String): Ferment
        ferments: [Ferment]
        fermentationVessel(vesselId: String): FermentationVessel
        fermentationVessels: [FermentationVessel]
        ingredients: IngredientResults
        recipe(recipeId: String): Recipe
        recipes: [Recipe]
    }
`;
