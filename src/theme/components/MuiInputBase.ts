import { Components } from "@mui/material";
import palette from "../palette";

const MuiInputBase: Components["MuiInputBase"] = {
  styleOverrides: {
    root: {
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "17px",
      "input::placeholder": {
        color: palette.text.placeholder,
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "17px",
      },
    },
  },

  defaultProps: {},

  variants: [
    {
      props: {},
      style: {},
    },
  ],
};

export default MuiInputBase;
