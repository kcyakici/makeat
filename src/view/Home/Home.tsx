import {Button, CircularProgress, Divider, Stack} from '@mui/material';
import React, {useEffect, useState} from 'react';
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import SearchWithIngr from '../../components/SearchWithIngr/SearchWithIngr';
import SearchWithName from '../../components/SearchWithName/SearchWithName';
import {getRecipes} from '../../services/recipe-service';
import {Recipe} from '../../utils/types';

const Home = () : JSX.Element => {
  const [isSearchWithName, setIsSearchWithName] = useState(false);
  const [isSearchWithIngr, setIsSearchWithIngr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [isError, setIsError] = useState(false);

  const handleBack = () => {
    setIsSearchWithIngr(false);
    setIsSearchWithName(false);
  };

  const handleAlertClose = () => {
    setIsError(false);
  };

  const searchWithName = (name: string) => {
    fetchData(name);
  };

  const fetchData = async (name: string) => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const recipeResponse = await getRecipes(name);

        if (recipeResponse && recipeResponse.status === 200) {
          setRecipeList(recipeResponse.data.results);
        }
      } catch (error) {
        setIsError(true);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData('burger');
  }, []);

  return (
    <>
      <CustomSnackBar open={isError} message={'Something went wrong!'} autoHideDuration={3000} handleClose={handleAlertClose} severity={'error'}/>
      <div style={{
        width: 'min(100% - 16px, 600px)',
        marginInline: 'auto',
      }}>
        { isSearchWithName && <SearchWithName handleBack={() => handleBack()} searchWithName={(name: string) => searchWithName(name)} />}
        { isSearchWithIngr && <SearchWithIngr handleBack={() => handleBack()} />}
        { (!isSearchWithName && !isSearchWithIngr) &&
          <Stack direction="row" spacing={2} sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh',
          }}>
            <Button variant="outlined" onClick={() => setIsSearchWithName(true)}>
            Search by Name
            </Button>
            <Button variant="outlined" onClick={() => setIsSearchWithIngr(true)}>
            Search by Ingredient
            </Button>
          </Stack>
        }
        <Divider></Divider>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10%',
        marginTop: '30px',
        height: '30vh',
      }}>
        {isLoading ? <CircularProgress color='secondary' /> :
        <>{recipeList.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image}/>
        ))}</>
        }
      </div>

    </>
  );
};

export default Home;
