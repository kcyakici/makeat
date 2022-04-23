import {AxiosResponse} from 'axios';
import {instance} from '../utils/instance';
import {Recipe, RecipeResponse} from '../utils/types';

const getRecipes = async (name: string): Promise<AxiosResponse<RecipeResponse>> => {
  const params = {
    query: name,
    number: '10',
  };

  return await instance.get('/recipes/complexSearch', {params: params});
};

const getRecipesByIngredient = async (ingredients: string[]) : Promise<AxiosResponse<Recipe[]>> => {
  const params = {
    ingredients: ingredients,
    number: '10',
    ranking: '1',
    ignorePantry: 'false',
  };

  return await instance.get('/recipes/findByIngredients', {params: params});
};

export {getRecipes, getRecipesByIngredient};

