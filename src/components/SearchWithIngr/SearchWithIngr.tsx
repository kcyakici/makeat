import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Chip, IconButton, InputAdornment, TextField} from '@mui/material';
import React, {useState} from 'react';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

type SearchWithIngrProps = {
    handleBack(): void;
}

const SearchWithIngr = ({handleBack}: SearchWithIngrProps) : JSX.Element => {
  const [inputText, setInputText] = useState('');
  const [ingrList, setIngrList] = useState<string[]>([]);
  const [isInputError, setIsInputError] = useState(false);

  const addIngr = () => {
    // ayni ingr varsa hata mesaji gosterilir, mui snackbar componenti kullanilarak(optional, best practice: misalen hatalarda kullanmak için jenerik bir hata snackbar'ı)
    // validation
    if (inputText && !ingrList.find((item) => item === inputText)) {
      setIngrList((ingrList) => [...ingrList, inputText]);
    } else {
      setIsInputError(true);
    }
    setInputText('');
  };

  const onTextChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleIngrDelete = (ingr: string) => {
    const newIngrList = ingrList.filter((a) => a !== ingr);
    setIngrList(newIngrList);
  };

  const handleAlertClose = () => {
    setIsInputError(false);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%', // %50 height dene
        width: '100%',
      }}>
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon/>
        </IconButton>
        <TextField fullWidth
          onChange={onTextChange}
          value={inputText}
          label={'Enter an Ingredient (eg. Potato)'}
          id="fullWidth"
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={addIngr} color='secondary'>
                  <AddOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }} />
      </div>


      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        {ingrList.map((ingr: string) => (
          <Chip color='secondary' key={ingr} label={ingr} onDelete={() => handleIngrDelete(ingr)} sx={{marginRight: '6px'}}/>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Button variant="outlined" startIcon={<SearchIcon />}>
            Search
        </Button>
      </div>

      <CustomSnackBar open={isInputError} message={'Please enter an unique value!'} autoHideDuration={3000} handleClose={handleAlertClose} severity={'error'}/>
    </div>
  );
};

export default SearchWithIngr;
