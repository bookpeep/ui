import { Components } from "@mui/material";
import shadows from "../shadows";

const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      boxShadow: shadows.card,
      borderRadius: "8px",
    },
  },
};

export default MuiCard;
