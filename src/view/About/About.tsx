import {Box, Typography} from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box sx={{width: '100%', alignContent: 'space-between', justifyContent: 'center', alignItems: 'center', gap: '30%'}}>
      <Typography variant="h3" gutterBottom component="div">
        About MakEat
      </Typography>
      <Typography variant="body1" gutterBottom>
        MakEat is a project to help people find the recipes they want and explore different cuisines. We aim to ease the process of preparing a menu with a simple, understandable interface that gets the job done.
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        How To?
      </Typography>
      <Typography variant="body1" gutterBottom>
        On the Home page, either search a recipe by its name, or by ingredients. To search with ingredients, write the name of an ingredient and click on the + button at the right of the bar. The search engine will then search the recipes that includes the ingredients of your choice. You may search for multiple ingredients.
      </Typography>
      <Typography variant="body1" gutterBottom>
        When you find a recipe that you would like to try out, simply click on the recipe card, choose the serving size under the image of the food, and click on Add to the Cart button. After you add the recipe to the cart. You may find the selected recipe under the Items tab, on top right. You may add multiple recipes to cart.
      </Typography>
    </Box>
  );
};

export default About;
