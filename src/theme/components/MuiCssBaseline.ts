import { Components } from '@mui/material';

const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: {
    'html, body, #root': {
      height: '100%',
    },
  },
};

export default MuiCssBaseline;
