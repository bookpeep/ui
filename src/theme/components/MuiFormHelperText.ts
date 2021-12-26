import { Components } from "@mui/material";
import palette from "../palette";

const MuiFormHelperText: Components["MuiFormHelperText"] = {
  styleOverrides: {
    root: {
      "&.Mui-error": {
        backgroundColor: palette.error.light,
        padding: "7px 12px",
      },
      marginLeft: 0,
      marginRight: 0,
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "15px",
      marginTop: "6px",
    },
  },
};

export default MuiFormHelperText;
