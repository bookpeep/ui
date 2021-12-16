import { PaletteMode, SimplePaletteColorOptions } from "@mui/material";
import { TypeText } from "@mui/material/styles/createPalette";

// declare means you are extending the module
declare module "@mui/material/styles/createPalette" {
  export interface TypeText {
    blank: string;
    label: string;
    lightLabel: string;
  }

  export interface Palette {
    bg: {
      blank: string;
      secondary: string;
    };

    border: {
      greyAlert: string;
    };
  }

  export interface PaletteOptions {
    bg: {
      blank: string;
      secondary: string;
    };

    border: {
      greyAlert: string;
    };
  }
}

const mainColors = {
  peepBlue: "#4048D6",
  peepDarkBlue: "#242BA8",
  peepBlueDisabled: "rgba(64, 71, 214, .4)",
  navyBlue: "#0A1F44",
  gray: "#4E5D78",
  lightGray: "#4E5D78",
  disabled:
    "repeating-linear-gradient( -45deg, #eeeeee73, #eeeeee73 1px, #c4ddfdad 1px, #c4ddfda1 7px )",
};

const errorColors = {
  error: "#F43319",
  secondaryError: "#DB230A",
  errorDisabled: "rgba(244, 51, 25, 0.4)",
  warning: "#FFCC00",
  secondaryWarning: "#FFE375",
  warningDisabled: "rgba(255, 204, 0, 0.4)",
};

const skyBlue = "#F7F8FD";

const black = "#000000";
const white = "#FFFFFF";

const labelGrey = "#4E5D78";
const lightLabelGrey = "#8E8E93";
const disabledGrey = "rgba(78, 93, 120, 0.6)";
const greyAlert = "rgba(78, 93, 120, 0.34)";

const mode: PaletteMode = "light";

const primary: SimplePaletteColorOptions = {
  main: mainColors.peepBlue,
  dark: mainColors.peepDarkBlue,
  light: mainColors.peepBlueDisabled,
};

const secondary: SimplePaletteColorOptions = {
  main: mainColors.navyBlue,
};

const error: SimplePaletteColorOptions = {
  main: errorColors.error,
  dark: errorColors.secondaryError,
  light: errorColors.errorDisabled,
};

const warning: SimplePaletteColorOptions = {
  main: errorColors.warning,
  dark: errorColors.secondaryWarning,
  light: errorColors.warningDisabled,
};

const text: TypeText = {
  primary: mainColors.navyBlue,
  secondary: mainColors.peepBlue,
  disabled: disabledGrey,
  blank: white,
  label: labelGrey,
  lightLabel: lightLabelGrey,
};

const common = {
  black,
  white,
};

const bg = {
  blank: white,
  secondary: skyBlue,
};

const border = {
  greyAlert,
};

const palette = {
  mode,
  primary,
  secondary,
  bg,
  text,
  border,
  error,
  warning,
  common,
};

export default palette;
