import { Components } from '@mui/material';
import palette from '../palette';

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },

  defaultProps: {
    disableElevation: true,
  },

  variants: [
    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        borderColor: palette.primary.main,
      },
    },
  ],
};

export default MuiButton;
