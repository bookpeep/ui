import { Components } from "@mui/material";
import palette from "../palette";
import shadows from "../shadows";
import { muiDisabled } from "./selectors";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteColor {
    lighter?: string;
  }
}

const MuiButton: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      minHeight: "48px",
      minWidth: "120px",
      borderRadius: "8px",
    },
  },

  defaultProps: {
    disableElevation: true,
    variant: "contained",
    // TODO: Remove if not needed
    color: "primary",
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
