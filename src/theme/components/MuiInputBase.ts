import { Components } from "@mui/material";

import spacing from "../spacing";

const MuiInputBase: Components["MuiInputBase"] = {
  styleOverrides: {
    root: {
      minHeight: spacing(6),

      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "17px",

      input: {
        "::placeholder": {
          color: "#919AAB",
          fontWeight: 500,
          opacity: 1,
          fontSize: "14px",
          lineHeight: "17px"
        }
      }
    }
  }
};

export default MuiInputBase;
