import {Alert, AlertColor, Snackbar} from '@mui/material';
import React from 'react';

type CustomSnackBarProps = {
    open: boolean,
    autoHideDuration: number,
    handleClose(): void,
    severity: AlertColor,
    message: string
}

const CustomSnackBar = ({open, autoHideDuration, handleClose, severity, message}: CustomSnackBarProps) : JSX.Element => {
  return (
    <>
      <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'top'}} open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackBar;
