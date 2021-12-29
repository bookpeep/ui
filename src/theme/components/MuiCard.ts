import { Components } from "@mui/material";
import shadows from "../shadows";

const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      borderRadius: "4px",
      boxShadow: "none",
      transition: "all 0.3s",
      "&:hover": {
        boxShadow: shadows.card,
      },
    },
  },
};

export default MuiCard;
