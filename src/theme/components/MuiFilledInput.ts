import { Components } from '@mui/material';

const MuiFilledInput: Components['MuiFilledInput'] = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
    },
  },

  defaultProps: {
    disableUnderline: true,
  },
};

export default MuiFilledInput;
