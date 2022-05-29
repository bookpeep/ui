import { createTheme } from "@mui/material/styles";

import components from "./components";
import palette from "./palette";
import shadows from "./shadows";
// import spacing from "./spacing";
import typography from "./typography";

export const peepTheme = createTheme({
  components,
  palette,
  shadows,
  // spacing,
  typography
});
