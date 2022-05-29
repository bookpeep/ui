import { Components } from "@mui/material";

const MuiAlert: Components["MuiAlert"] = {
  styleOverrides: {
    filledSuccess: {
      backgroundColor: "#53BFB0",
    },
    filledError: {
      backgroundColor: "#F43319",
    },
  },
};

export default MuiAlert;
