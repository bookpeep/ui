import { Components } from "@mui/material";
import palette from "../palette";
import { selected } from "./selectors";

const MuiTab: Components["MuiTab"] = {
  styleOverrides: {
    root: {
      minWidth: 0,
      padding: 0,
      color: palette.text.primary,
      textTransform: "none",

      [selected]: {
        fontWeight: 600,
      },
    },
  },
};

export default MuiTab;
