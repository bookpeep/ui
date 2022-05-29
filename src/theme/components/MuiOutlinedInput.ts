import { Components } from "@mui/material";

import palette from "../palette";
import spacing from "../spacing";
import { muiDisabled } from "./selectors";

const MuiOutlinedInput: Components["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      minHeight: spacing(6),

      input: {
        "::placeholder": {
          color: "#919AAB",
          fontWeight: 500,
          opacity: 1
        }
      },

      fieldset: {
        borderWidth: "1px",
        borderColor: palette.border.lightGray,
        borderRadius: "8px",
        transition: "all .3s"
      },

      "&:hover fieldset": {
        borderColor: palette.border.lightGray + "!important",
        borderWidth: "1px !important",
        boxShadow: "0px 8px 34px rgba(10, 31, 68, 0.08)"
      },

      "&.Mui-focused fieldset": {
        borderColor: palette.primary.main + "!important",
        borderWidth: "1px !important"
      },

      [muiDisabled]: {
        borderRadius: "8px",
        background: palette.bg.disabled
      }
    }
  },

  defaultProps: {
    notched: true,

    inputProps: {
      style: {
        padding: "14px 12px"
      }
    }
  }
};

export default MuiOutlinedInput;
