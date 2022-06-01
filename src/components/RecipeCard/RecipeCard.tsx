import {CardActionArea, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import {useState} from 'react';
import {RecipeInformation} from '../../utils/types';
import RecipeModal from '../RecipeModal/RecipeModal';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

          <CardContent sx={{maxHeight: '46px'}}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row'}}>
                <Typography variant="h6" color="text.secondary">
                  {recipeInfo.servings}
                </Typography>
                <RestaurantIcon color='secondary'/>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row'}}>
                <Typography variant="h6" color="text.secondary">
                  {recipeInfo.readyInMinutes} Min
                </Typography>
                <HourglassBottomIcon color='secondary'/>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row'}}>
                <Typography variant="h6" color="text.secondary">
                  {recipeInfo.healthScore}
                </Typography>
                <FavoriteIcon color='secondary'/>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <RecipeModal open={isRecipeModelOpen} handleClose={handleModelClose} recipeInfo={recipeInfo}/>
    </div>
  );
};

export default RecipeCard;
