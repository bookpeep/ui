import { Components } from "@mui/material";

import palette from "../palette";

const MuiDateRangePickerDay: Components["MuiDateRangePickerDay"] = {
  styleOverrides: {
    root: {
      "&.MuiDateRangePickerDay-rangeIntervalDayHighlight": {
        backgroundColor: "#EBF4FE",
        "& button": {
          color: palette.common.black,
          fontWeight: 500
        },
        "&.MuiDateRangePickerDay-rangeIntervalDayHighlightStart": {
          "& button": {
            color: palette.common.white
          }
        },
        "&.MuiDateRangePickerDay-rangeIntervalDayHighlightEnd": {
          "& button": {
            color: palette.common.white
          }
        }
      }
      // Not sure if following snippet is useful.
      // If Basma don't complain in 2 months, delete this snippet.
      // "&.MuiDateRangePickerDay-dayOutsideRangeInterval": {
      //   color: peepTheme.palette.common.black,
      //   backgroundColor: "transparent",
      // },
    }
  }
};

export default MuiDateRangePickerDay;
