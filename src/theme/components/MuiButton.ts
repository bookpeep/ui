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
    variant: 'contained',
  },

  variants: [
    {
      props: { variant: 'contained' },
      style: {
        textTransform: 'none',
      },
    },

    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        borderColor: palette.primary.main,
      },
    },
  ],
};

export default MuiButton;
