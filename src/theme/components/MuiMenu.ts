import { Components } from "@mui/material";
import palette from "../palette";

const MuiMenu: Components["MuiMenu"] = {
  styleOverrides: {
    root: {
      maxHeight: "135px",
      marginTop: "8px",
      ".MuiPaper-root": {
        borderRadius: "8px",
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: palette.bg.lightestGray,
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: palette.bg.lightGray,
          borderRadius: "20px",
          border: `1px solid ${palette.bg.lightestGray}`,
        },
      },
    },
  },
};

export default MuiMenu;
