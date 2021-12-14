import "@fontsource/quicksand/300.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";
import { TypographyVariantsOptions } from "@mui/material";
import palette from "./palette";

declare module "@mui/material/styles" {
  export interface TypographyVariants {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
    link: React.CSSProperties;
  }

  export interface TypographyVariantsOptions {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
    link: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
    link: true;

    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    overline: false;
  }
}

const typography: TypographyVariantsOptions = {
  fontFamily: "Quicksand",

  // If no unit is provided line height is automatically fontSize * lineHeight
  // Aaaand, in the designs the line height is always 1.25 times the font size
  allVariants: {
    lineHeight: 1.25,
  },

  h1: {
    fontSize: "1.5rem",
    fontWeight: 700,
  },

  h2: {
    fontSize: "1.25rem",
    fontWeight: 700,
  },

  h3: {
    fontSize: "1.125rem",
    fontWeight: 700,
  },

  h4: {
    fontSize: "1rem",
    fontWeight: 700,
  },

  h5: {
    fontSize: "1rem",
    fontWeight: 500,
  },

  primary: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },

  secondary: {
    fontSize: "0.75rem",
    fontWeight: 400,
  },

  link: {
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "underline",
    color: palette.primary.main,
    cursor: "pointer",
  },

  button: {
    fontSize: "1rem",
    fontWeight: 500,
    textTransform: "none",
  },
};

export default typography;
