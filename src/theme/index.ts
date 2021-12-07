import { createTheme } from '@mui/material/styles';
import components from './components';
import palette from './palette';
import typography from './typography';
import shadows from './shadows';

export const peepTheme = createTheme({
  palette,
  typography,
  components,
  shadows,
});
