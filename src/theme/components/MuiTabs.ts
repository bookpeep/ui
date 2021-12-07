import { Components } from "@mui/material";
import shadows from "../shadows";

const MuiTabs: Components["MuiTabs"] = {
  styleOverrides: {
    root: {
      boxShadow: shadows.divider,
    },

    flexContainer: {
      // gap: 20,
    },
  },
};

export default MuiTabs;
