import { Components } from "@mui/material";
import palette from "../palette";

const MuiList: Components["MuiList"] = {
  styleOverrides: {
    root: {
      background: palette.bg.blank
    },
  },
};

export default MuiList;
