import { Components } from "@mui/material";

import { ChevronDown } from "../../icons";

const MuiSelect: Components["MuiSelect"] = {
  styleOverrides: {
    select: {
      padding: "14px 12px",
      minWidth: "100px"
    }
  },

  defaultProps: {
    IconComponent: ChevronDown
  },

  variants: [
    {
      props: {},
      style: {}
    }
  ]
};

export default MuiSelect;
