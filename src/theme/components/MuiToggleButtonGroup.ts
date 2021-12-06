import { Components } from '@mui/material';
import palette from '../palette';

const MuiToggleButtonGroup: Components['MuiToggleButtonGroup'] = {
  styleOverrides: {
    root: {
      backgroundColor: palette.bg.blank,
      maxHeight: '38px',
    },
  },
};

export default MuiToggleButtonGroup;
