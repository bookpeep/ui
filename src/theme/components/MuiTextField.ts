import { Components } from "@mui/material";

import palette from "../palette";

const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      background: palette.bg.blank
    }
  },

  defaultProps: {
    inputProps: {
      maxLength: 255,
      style: {
        padding: "14px 12px"
      }
    },
    InputLabelProps: { shrink: true }
  },

  variants: [
    {
      props: { variant: "outlined" },
      style: {}
    }
  ]
};

export default MuiTextField;
