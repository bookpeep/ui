import { Components } from "@mui/material";
import palette from "../palette";
import { selected } from "./selectors";

const MuiToggleButton: Components["MuiToggleButton"] = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      fontSize: "1rem",
      textTransform: "none",
      borderColor: palette.primary.main,

      [selected]: {
        fontWeight: 500,
        color: palette.text.blank,
        backgroundColor: palette.primary.main,

        "&:hover": {
          color: palette.text.blank,
          backgroundColor: palette.primary.main,
        },
      },

      "&:hover, &:active": {
        color: palette.text.primary,
        backgroundColor: palette.primary.light,
      },
    },
  },
};

export default MuiToggleButton;
