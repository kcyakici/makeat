import {useState} from 'react';
import React from 'react';
import {Ingredient, RecipeInformation} from '../utils/types';
import {CartContext, CartContextType} from './CartContext';

const CartProvider = ({children}: {children: JSX.Element}): JSX.Element => {
  const [recipeInfoList, setRecipeInfoList] = useState([] as RecipeInformation[]);
  const [ingredientList, setIngredientList] = useState([] as Ingredient[]);

  return (
    <CartContext.Provider value={{recipeInfoList, ingredientList, setRecipeInfoList, setIngredientList}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('CartContext must be used within a ItemCountProvider');
  }
  return context;
};

export {CartProvider, useCart};
