import { Components } from "@mui/material";

const MuiCssBaseline: Components["MuiCssBaseline"] = {
  styleOverrides: {
    "html, body, #root": {
      height: "100%",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    },
    "::-webkit-scrollbar": {
      height: 0,
      width: 0,
      background: "transparent",
    },
  },
};

export default MuiCssBaseline;
