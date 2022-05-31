import { Components } from "@mui/material";

import { ChevronLeft, ChevronRight } from "../../icons";

const MuiPickerStaticWrapper: Components["MuiPickerStaticWrapper"] = {
  styleOverrides: {
    root: {
      "& div div:not(:last-of-type)": {
        borderRight: "0px solid transparent"
      }
    }
  },
  defaultProps: {
    components: {
      LeftArrowIcon: ChevronLeft,
      RightArrowIcon: ChevronRight
    }
  }
};

export default MuiPickerStaticWrapper;
