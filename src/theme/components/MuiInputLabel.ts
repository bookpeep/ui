import { Components } from "@mui/material";
import { muiFocused } from "./selectors";
import palette from "../palette";

const MuiInputLabel: Components["MuiInputLabel"] = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "15px",
      WebkitTransform: "translate(12px, -7px) scale(.9)",
      MozTransformOrigin: "translate(12px, -7px) scale(.9)",
      msTransform: "translate(12px, -7px) scale(.9)",
      transform: "translate(12px, -7px) scale(.9)",
      [muiFocused]: {
        color: palette.text.primary,
      },
    },
  },
};

export default MuiInputLabel;
