import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Button, IconButton, TextField} from '@mui/material';
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

type SearchWithNameProps = {
    handleBack(): void;
    searchWithName(name: string): void;
}

const SearchWithName = ({handleBack, searchWithName} : SearchWithNameProps) : JSX.Element => {
  const [inputText, setInputText] = useState('');

  const onTextChange = (e: any) => {
    setInputText(e.target.value);
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
          label={'Enter a Dish Name (eg. Spaghetti)'}
          id="fullWidth" />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Button disabled={!inputText} variant="outlined" startIcon={<SearchIcon />} onClick={() => searchWithName(inputText)}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchWithName;
