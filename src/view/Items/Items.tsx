import {Box, Grid, List, ListItem, ListItemText, Typography, Divider} from '@mui/material';
import React from 'react';
import RecipeListItem from '../../components/RecipeListItem/RecipeListItem';
import {useCart} from '../../hooks/CartProvider';
import {Ingredient} from '../../utils/types';

const getMeasurementText = (ingredient: Ingredient) : string => {
  return ingredient.measures.metric.amount + ' ' + ingredient.measures.metric.unitLong;
};

const Items = (): JSX.Element => {
  const {recipeInfoList, ingredientList} = useCart();

  return (
    <Box sx={{
      height: 'calc(100% - 64px)',
      flexGrow: 1,
    }}>
      <Grid container spacing={2} sx={{
        height: '100%',
      }}>
        <Grid item xs={8} sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
          <Typography>
          Recipes
          </Typography>
          {recipeInfoList.length === 0 && (
            <Typography>
            No recipes added
            </Typography>
          )}
          <div style={{overflowY: 'scroll'}}>
            {recipeInfoList.map((recipeInfo) => (
              <div key={recipeInfo.id}>
                <RecipeListItem recipeInfo={recipeInfo}/>
                <Divider/>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={4} sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
          <Typography>
          Total Needed Ingredients:
          </Typography>
          <List sx={{
            overflowY: 'scroll',
          }}>
            {ingredientList.map((ingredient) => (
              <div key={ingredient.id}>

                <ListItem key={ingredient.id} disablePadding>
                  <ListItemText primary={ingredient.name} secondary={getMeasurementText(ingredient)} />
                </ListItem>

                {/* <h3>{}{ingredient.name} - {getMeasurementText(ingredient)}</h3> */}
              </div>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Items;
