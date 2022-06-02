import {Box, Grid, List, ListItem, ListItemText, Typography, Divider} from '@mui/material';
import React from 'react';
import {useCart} from '../../hooks/CartProvider';
import {Ingredient} from '../../utils/types';

const getMeasurementText = (ingredient: Ingredient) : string => {
  return ingredient.measures.metric.amount + ' ' + ingredient.measures.metric.unitLong;
};

const Items = (): JSX.Element => {
  const {recipeInfoList, ingredientList} = useCart();

  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>
              Recipe Name
            </Typography>
            {recipeInfoList.map((recipeInfo) => (
              <div key={recipeInfo.id}>
                <div>
                  <h3>{recipeInfo.title}</h3>
                  <img src={recipeInfo.image}
                    width='25%'
                  />
                </div>
                <Divider/>
              </div>
            ))}
          </Grid>
          <Grid item xs={4}>
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
    </div>
  );
};

export default Items;
