import {CardActionArea, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import {useState} from 'react';
import {RecipeInformation} from '../../utils/types';
import RecipeModal from '../RecipeModal/RecipeModal';

type RecipeCardProps = {
  recipeInfo: RecipeInformation
}

const RecipeCard = ({recipeInfo} : RecipeCardProps) : JSX.Element => {
  const [isRecipeModelOpen, setIsRecipeModelOpen] = useState(false);

  const handleModelClose = () => {
    setIsRecipeModelOpen(false);
  };

  const handleModelOpen = () => {
    setIsRecipeModelOpen(true);
  };

  return (
    <div>
      <Card sx={{maxWidth: 345}}>
        <CardActionArea onClick={() => handleModelOpen()}>
          <CardHeader
            title={recipeInfo.title}
          />

          <CardMedia
            component="img"
            height="194"
            image={recipeInfo.image}/>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
            I do not even understand how Swedish people are able to eat this absolute madness of a dish
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <RecipeModal open={isRecipeModelOpen} handleClose={handleModelClose}/>
    </div>
  );
};

export default RecipeCard;
