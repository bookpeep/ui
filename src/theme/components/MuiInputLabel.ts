import { Components } from "@mui/material";
import palette from "../palette";
import { muiFocused } from "./selectors";

const MuiInputLabel: Components["MuiInputLabel"] = {
  styleOverrides: {
    root: {
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "15px",
      "-webkit-transform": "translate(12px, -7px) scale(.9)",
      "-moz-transform": "translate(12px, -7px) scale(.9)",
      "-ms-transform": "translate(12px, -7px) scale(.9)",
      transform: "translate(12px, -7px) scale(.9)",
      [muiFocused]: {
        color: palette.text.primary,
      },
    },
  },
};

export default MuiInputLabel;
