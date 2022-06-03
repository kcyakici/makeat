import {Button, CircularProgress, Divider, Stack} from '@mui/material';
import React, {useState} from 'react';
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import SearchWithIngr from '../../components/SearchWithIngr/SearchWithIngr';
import SearchWithName from '../../components/SearchWithName/SearchWithName';
import {getRecipeInformationList, getRecipes, getRecipesByIngredient} from '../../services/recipe-service';
import {Recipe, RecipeInformation} from '../../utils/types';

const Home = () : JSX.Element => {
  const [isSearchWithName, setIsSearchWithName] = useState(false);
  const [isSearchWithIngr, setIsSearchWithIngr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [recipeInfoList, setRecipeInfoList] = useState<RecipeInformation[]>([]);

  const handleBack = () => {
    setIsSearchWithIngr(false);
    setIsSearchWithName(false);
  };

  const getIdList = (recipeList: Recipe[]): number[] => {
    const idList: number[] = [];
    recipeList.forEach((recipe) => idList.push(recipe.id));
    return idList;
  };

  const handleAlertClose = () => {
    setIsError(false);
  };

  const searchWithName = (name: string) => {
    fetchData(name);
  };

  const searchWithIngredients = (ingredients: string[]) => {
    fetchDataWithIngredient(ingredients);
  };

  const fetchData = async (name: string) => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const recipeResponse = await getRecipes(name);

        if (recipeResponse && recipeResponse.status === 200) {
          const recipeInformationListResponse = await getRecipeInformationList(getIdList(recipeResponse.data.results));

          if (recipeInformationListResponse && recipeInformationListResponse.status === 200) {
            setRecipeInfoList(recipeInformationListResponse.data);
          }
        }
      } catch (error) {
        setIsError(true);
      }
    }
    setIsLoading(false);
  };

  const fetchDataWithIngredient = async (ingredients: string[]) => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const recipeResponse = await getRecipesByIngredient(ingredients);

        if (recipeResponse && recipeResponse.status === 200) {
          const recipeInformationListResponse = await getRecipeInformationList(getIdList(recipeResponse.data));

          if (recipeInformationListResponse && recipeInformationListResponse.status === 200) {
            setRecipeInfoList(recipeInformationListResponse.data);
          }
        }
      } catch (error) {
        setIsError(true);
      }
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchData('burger');
  // }, []);

  return (
    <>
      <CustomSnackBar open={isError} message={'Something went wrong!'} autoHideDuration={3000} handleClose={handleAlertClose} severity={'error'}/>
      <div style={{
        width: 'min(100% - 16px, 600px)',
        marginInline: 'auto',
      }}>
        { isSearchWithName && <SearchWithName handleBack={() => handleBack()} searchWithName={(name: string) => searchWithName(name)} />}
        { isSearchWithIngr && <SearchWithIngr handleBack={() => handleBack()} searchWithIngredient={(ingredients: string[]) => searchWithIngredients(ingredients)}/>}
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
        overflowY: 'scroll',
      }}>
        {isLoading ? <CircularProgress color='secondary' /> :
        <>{recipeInfoList.map((recipeInfo: RecipeInformation) => (
          <RecipeCard key={recipeInfo.id} recipeInfo={recipeInfo}/>
        ))}</>
        }
      </div>

    </>
  );
};

export default Home;
