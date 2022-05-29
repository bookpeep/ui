import { Components } from "@mui/material";
import React from "react";

import { ChevronDown } from "../../icons";

const MuiAutocomplete: Components["MuiAutocomplete"] = {
  defaultProps: {
    size: "small",
    popupIcon: <ChevronDown />
  }
};

export default MuiAutocomplete;
