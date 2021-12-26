import { PaletteMode, SimplePaletteColorOptions } from "@mui/material";

import { TypeText } from "@mui/material/styles/createPalette";

// declare means you are extending the module
declare module "@mui/material/styles/createPalette" {
  export interface TypeText {
    blank: string;
    label: string;
    lightLabel: string;
    placeholder: string;
  }

  export interface Palette {
    bg: {
      blank: string;
      secondary: string;
    };

    border: {
      lightGray: string;
    };
  }

  export interface PaletteOptions {
    bg: {
      blank: string;
      secondary: string;
      disabled: string;
    };

    border: {
      lightGray: string;
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
};

// const lightColors = {
//   yellow: "#FCF3E4",
//   red: "#FFE7EB",
//   blue: "#EAF4FF",
//   green: "#E4FAF7",
// };

const bgColors = {
  blank: "#FFFFFF",
  secondary: "#F7F8FD",
  lightGray: "#B3B9C4",
  lightestGray: "#EAEAEA40",
  lightBlue: "rgba(196, 221, 253, 0.34)",
  disabled:
    "repeating-linear-gradient( -45deg, #bfbfbf8f, #bfbfbf8f 1px, #c4ddfdad 1px, #c4ddfda1 7px )",
};

// const additionalColors = {
//   blue: "#3636CF",
//   secondaryBlue: "#E7E9FF",
//   green: "#53BFB0",
//   secondaryGreen: "#E4FAF7",
//   skyBlue: "#6CA1EA",
//   secondarySkyBlue: "#EEFAFF",
//   tuscany: "#EAAA39",
//   secondaryTuscany: "#FFEED1",
//   purple: "#AD34E5",
//   secondaryPurple: "#F6E3FF",
//   gray: "#919AAB",
// };

const errorColors = {
  error: "#F43319",
  secondaryError: "#DB230A",
  errorDisabled: "rgba(244, 51, 25, 0.06)",
  warning: "#FFCC00",
  secondaryWarning: "#FFE375",
  warningDisabled: "rgba(255, 204, 0, 0.4)",
};

const placeholderGray = "#8E98A9";

const black = "#000000";
const white = "#FFFFFF";

const labelGrey = "#4E5D78";
const lightLabelGrey = "#8E8E93";
const disabledGrey = "rgba(78, 93, 120, 0.6)";
const lightGray = "rgba(64, 72, 214, 0.4)";

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
  placeholder: placeholderGray,
  lightLabel: lightLabelGrey,
};

const common = {
  black,
  white,
  gray: mainColors.gray,
};

const bg = {
  blank: bgColors.blank,
  secondary: bgColors.secondary,
  disabled: bgColors.disabled,
  lightestGray: bgColors.lightestGray,
  lightGray: bgColors.lightGray,
  lightBlue: bgColors.lightBlue,
};

const border = {
  lightGray,
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
