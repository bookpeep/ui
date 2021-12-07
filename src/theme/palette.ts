import { PaletteMode, SimplePaletteColorOptions } from "@mui/material";
import { TypeText } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteColor {
    lighter?: string;
  }
  export interface SimplePaletteColorOptions {
    lighter?: string;
  }

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

const navy = "#0A1F44";

const peepBlue = "#4048D6";
const peepBlueHalfOpacity = "rgba(64, 72, 214, 0.5)";
const peepBlueVeryLight = "#E2EFFF";

const skyBlue = "#F7F8FD";
// const skyBlue = "skyblue";

const black = "#000000";
const white = "#FFFFFF";

const labelGrey = "#4E5D78";
const lightLabelGrey = "#8E8E93";
const disabledGrey = "rgba(78, 93, 120, 0.6)";
const greyAlert = "rgba(78, 93, 120, 0.34)";

const mode: PaletteMode = "light";

const primary: SimplePaletteColorOptions = {
  main: peepBlue,
  light: peepBlueHalfOpacity,
  lighter: peepBlueVeryLight,
};

const secondary: SimplePaletteColorOptions = {
  main: navy,
};

const text: TypeText = {
  primary: navy,
  secondary: peepBlue,
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
  common,
};

export default palette;
