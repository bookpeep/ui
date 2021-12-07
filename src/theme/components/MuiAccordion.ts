import { Components } from "@mui/material";

const MuiAccordion: Components["MuiAccordion"] = {
  styleOverrides: {
    root: {
      "&:before": {
        display: "none",
      },
    },
  },

  defaultProps: {
    disableGutters: true,
    elevation: 0,
    TransitionProps: {
      timeout: 0,
    },
  },
};

export default MuiAccordion;
