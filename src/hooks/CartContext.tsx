import {createContext} from 'react';
import {Ingredient, RecipeInformation} from '../utils/types';

export type CartContextType = {
    recipeInfoList: RecipeInformation[],
    ingredientList: Ingredient[],
    setRecipeInfoList: (recipeInfoList: RecipeInformation[]) => void,
    setIngredientList: (ingredientList: Ingredient[]) => void,
};

const CartContext = createContext({} as CartContextType);

export {CartContext};
