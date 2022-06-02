import {AxiosResponse} from 'axios';
import qs from 'qs';
import {instance} from '../utils/instance';
import {Recipe, RecipeInformation, RecipeResponse} from '../utils/types';

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

  return await instance.get('/recipes/findByIngredients', {
    params: params,
    paramsSerializer: (params) => {
      return qs.stringify(params, {arrayFormat: 'comma'});
    }} );
};

const getRecipeInformationList = async (idList: number[]) : Promise<AxiosResponse<RecipeInformation[]>> => {
  const params = {
    ids: idList,
    includeNutrition: 'false',
  };

  console.log('Servisteyim params: ', params);

  return await instance.get('recipes/informationBulk', {
    params: params,
    paramsSerializer: (params) => {
      return qs.stringify(params, {arrayFormat: 'comma'});
    }});
};

export {getRecipes, getRecipesByIngredient, getRecipeInformationList};

