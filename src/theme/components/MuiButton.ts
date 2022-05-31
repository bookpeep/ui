import { Components } from "@mui/material";

import palette from "../palette";
import shadows from "../shadows";
import { muiDisabled } from "./selectors";

const MuiButton: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      minHeight: "48px",
      borderRadius: "8px"
    }
  },

  defaultProps: {
    disableElevation: true,
    variant: "contained",
  },

  variants: [
    {
      props: { variant: "contained", color: "primary" },
      style: {
        "&:hover": {
          backgroundColor: palette.primary.dark,
          boxShadow: shadows.primaryButtonHover,
        },
        [muiDisabled]: {
          backgroundColor: palette.primary.light,
          color: palette.common.white,
        },
      },
    },

    {
      props: { variant: "outlined", color: "primary" },
      style: {
        borderColor: palette.primary.main,
      },
    },
    {
      props: { variant: "contained", color: "error" },
      style: {
        "&:hover": {
          backgroundColor: palette.error.dark,
          boxShadow: shadows.errorButtonHover,
        },
        [muiDisabled]: {
          backgroundColor: palette.error.light,
          color: palette.common.white,
        },
      },
    },
    {
      props: { variant: "contained", color: "warning" },
      style: {
        "&:hover": {
          backgroundColor: palette.warning.dark,
          boxShadow: shadows.warningButtonHover,
        },
        [muiDisabled]: {
          backgroundColor: palette.warning.light,
        },
      },
    },
  ],
};

export default MuiButton;
