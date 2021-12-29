import { Components } from "@mui/material";
import palette from "../palette";
import { muiSelected } from "./selectors";

const MuiTab: Components["MuiTab"] = {
  styleOverrides: {
    root: {
      minWidth: 0,
      color: palette.text.primary,
      textTransform: "none",
      padding: "24px 0 20px",
      marginRight: "24px",
      marginLeft: "24px",
      [muiSelected]: {
        fontWeight: 600,
      },
    },
  },
};

export default MuiTab;
