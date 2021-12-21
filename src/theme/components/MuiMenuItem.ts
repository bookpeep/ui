import { Components } from "@mui/material";
import palette from "../palette";
import { muiFocusVisible } from "./selectors";

const MuiMenuItem: Components["MuiMenuItem"] = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "17px",
      padding: "10px 12px",
      transition: "all .3s",
      [muiFocusVisible]: {
        background: palette.bg.secondary,
        color: palette.primary.main,
      },
      "&:hover": {
        background: palette.bg.secondary,
      },
    },
  },
};

export default MuiMenuItem;
