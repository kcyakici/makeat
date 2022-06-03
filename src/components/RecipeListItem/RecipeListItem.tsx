import React, {useState} from 'react';
import {RecipeInformation} from '../../utils/types';
import {Button} from '@mui/material';
import RecipeModal from '../RecipeModal/RecipeModal';

type RecipeListItemProps = {
  recipeInfo: RecipeInformation
}

const RecipeListItem = ({recipeInfo}: RecipeListItemProps): JSX.Element => {
  const [isRecipeModelOpen, setIsRecipeModelOpen] = useState(false);

  const handleModelClose = () => {
    setIsRecipeModelOpen(false);
  };

  const handleModelOpen = () => {
    setIsRecipeModelOpen(true);
  };

  return (
    <div>
      <h3>{recipeInfo.title}</h3>
      <img src={recipeInfo.image}
        width='25%'
      />
      <Button variant="outlined" onClick={() => handleModelOpen()}>Details</Button>
      <RecipeModal open={isRecipeModelOpen} handleClose={handleModelClose} recipeInfo={recipeInfo}/>
    </div>
  );
};

export default RecipeListItem;
