import "@fontsource/quicksand/300.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";
import { TypographyVariantsOptions } from "@mui/material";
import palette from "./palette";

const typography: TypographyVariantsOptions = {
  fontFamily: "Quicksand",

  allVariants: {
    color: palette.text?.primary,
    fontWeight: "500",
    userSelect: "none",
  },

  h1: {
    fontSize: "1.5rem",
    fontWeight: "700",
  },

  h2: {
    fontSize: "1.25rem",
    fontWeight: "700",
  },

  h3: {
    fontSize: "1.125rem",
    fontWeight: "700",
  },

  h4: {
    fontSize: "1rem",
    fontWeight: "700",
  },

  h5: {
    fontSize: "0.875rem",
    fontWeight: "700",
  },

  subtitle1: {
    fontSize: "1rem",
    fontWeight: "700",
  },

  subtitle2: {
    fontSize: "1rem",
    fontWeight: "400",
    color: palette.text?.label,
  },

  button: {
    textTransform: "none",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },

  body1: {
    fontSize: "0.875rem",
    fontWeight: "400",
  },
};

export default typography;
