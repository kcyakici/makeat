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
