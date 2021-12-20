import { Components } from "@mui/material";
import shadows from "../shadows";

const MuiTableRow: Components["MuiTableRow"] = {
  styleOverrides: {
    head: {
      "&:hover": {
        boxShadow: "none",
      },
    },
    root: {
      transition: "all .3s",
      "&:hover": {
        boxShadow: shadows.tableHover,
      },
    },
  },
};

export default MuiTableRow;
