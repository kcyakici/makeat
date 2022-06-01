export type RecipeResponse = {
  results: Recipe[],
  offset: number,
  number: number,
  totalResults: number,
}

export type Recipe = {
  id: number,
  title: string,
  image: string,
  imageType: string,
}

export type RecipeInformation = {
  id: number,
  title: string,
  image: string,
  imageType: string,
  vegetarian: boolean,
  vegan: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  extendedIngredients: Ingredient[],
  servings: number,
  summary: string,
  readyInMinutes: number,
  instructions: string,
  spoonacularScore: number,
  healthScore: number,
  dishTypes: string[],
  cuisines: string[]
}

export type Ingredient = {
  id: number,
  name: string,
  measures: {
    us: {
      amount: number,
      unitLong: string
    },
    metric: {
      amount: number,
      unitLong: string
    }
  }
}
