import {Button, Grid, IconButton, List, ListItem, ListItemText, Tooltip, Checkbox, ListItemIcon, ListItemButton} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {Ingredient, RecipeInformation} from '../../utils/types';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 800,
  height: '78%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const getMeasurementText = (ingredient: Ingredient) : string => {
  return ingredient.measures.metric.amount + ' ' + ingredient.measures.metric.unitLong;
};

type RecipeModalProps = {
  open: boolean,
  handleClose(): void,
  recipeInfo: RecipeInformation
}

const RecipeModal = ({open, handleClose, recipeInfo}: RecipeModalProps): JSX.Element => {
  const [servings, setServings] = React.useState(recipeInfo.servings);
  const [ingredients, setIngredients] = React.useState(recipeInfo.extendedIngredients);
  const [checkedIngredientIds, setCheckedIngredientIds] = React.useState([] as number[]);
  const [measuresPerServing, setMeasuresPerServing] = React.useState([] as number[]);

  React.useEffect(() => {
    const measuresPerServing = ingredients.map((ingredient) => ingredient.measures.metric.amount / recipeInfo.servings);
    setMeasuresPerServing(measuresPerServing);
  }, []);

  React.useEffect(() => {
    if (measuresPerServing.length === 0) return;
    if (ingredients.length === 0) return;

    const newIngredients = [...ingredients];

    newIngredients.forEach((ingredient, index) => {
      ingredient.measures.metric.amount = measuresPerServing[index] * servings;
    });

    setIngredients(newIngredients);
  }, [servings]);

  const handleToggle = (id: number) => {
    const currentIndex = checkedIngredientIds.indexOf(id);
    const newCheckedIngredientIds = [...checkedIngredientIds];

    if (currentIndex === -1) {
      newCheckedIngredientIds.push(id);
    } else {
      newCheckedIngredientIds.splice(newCheckedIngredientIds.indexOf(id), 1);
    }

    setCheckedIngredientIds(newCheckedIngredientIds);
  };

  const handleAddToCart = (): void => {
    if (checkedIngredientIds.length === 0) {
      console.log('No ingredients selected');
    } else {
      console.log('Ingredients selected: ' + checkedIngredientIds);
    }
  };

  const incServing = (): void => {
    setServings(servings + 1);
  };

  const decServing = (): void => {
    if (servings === 1) return;

    setServings(servings - 1);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4">
            {recipeInfo.title}
          </Typography>
          <Grid container spacing={2} sx={{
            height: '100%',
          }}>
            <Grid item xs={5} sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <img src={recipeInfo.image}
                width='100%'
              />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '8px',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Typography variant="h6" color="text.secondary">
                    {servings}
                  </Typography>
                  <Tooltip title="Servings">
                    <RestaurantIcon color='secondary'/>
                  </Tooltip>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <IconButton aria-label="add" size="small" color='primary' onClick={() => incServing()}>
                      <AddIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton aria-label="remove" size="small" color='primary' onClick={() => decServing()}>
                      <RemoveIcon fontSize="inherit"/>
                    </IconButton>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Typography variant="h6" color="text.secondary">
                    {recipeInfo.readyInMinutes} Min
                  </Typography>
                  <Tooltip title="Duration">
                    <HourglassBottomIcon color='secondary'/>
                  </Tooltip>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Typography variant="h6" color="text.secondary">
                    {recipeInfo.healthScore}
                  </Typography>
                  <Tooltip title="Health Score">
                    <FavoriteIcon color='secondary'/>
                  </Tooltip>
                </div>
              </div>
              <List sx={{
                overflowY: 'scroll',
              }}>
                {ingredients.map((ingredient: Ingredient) => (
                  <ListItem key={ingredient.id} disablePadding>
                    <ListItemButton onClick={() => handleToggle(ingredient.id)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checkedIngredientIds.indexOf(ingredient.id) !== -1}
                        />
                      </ListItemIcon>
                      <ListItemText primary={ingredient.name} secondary={getMeasurementText(ingredient)} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" color='secondary' onClick={() => handleAddToCart()} sx={{
                marginTop: '8px',
                marginBottom: '8px',
              }}>
                {checkedIngredientIds.length > 0 ? 'Add ' + checkedIngredientIds.length + ' Ingredient(s)' : 'Add All to Cart'}
              </Button>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h5">
                Instructions
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{__html: recipeInfo.instructions}}
                variant="body1">
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default RecipeModal;

// Bir listeyi kullanarak birden fazla şeyi nasıl yazdırıyorduk -> Home (Ingredient için) map
// divider düşün spacing koymuştum zaten
