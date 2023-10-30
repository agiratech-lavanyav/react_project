import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SnackbarMessage({ open, message, severity, onClose, autoHideDuration }) {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
      <Alert elevation={4} variant="filled" onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarMessage;