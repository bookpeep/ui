import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import React from "react";
import { muiDisabled } from "../theme/components/selectors";
import palette from "../theme/palette";

export interface PriceFieldProps {
  value: any;
  label: string;
  disabled: boolean;
  placeholder?: string;
  currency?: string;
  labelId?: string;
}

const priceInput = {
  "&.MuiInputBase-adornedStart": {
    backgroundColor: palette.bg.lightBlue,
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  ".MuiInputAdornment-root": {
    flex: "0 0 40px",
    ".MuiTypography-root": {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "24px",
      color: palette.common.gray,
    },
  },
  input: {
    flex: "0 0 calc(100% - 72px)",
    background: palette.bg.blank,
    [muiDisabled]: {
      background: palette.bg.disabled,
    },
  },
};

export function PriceField(props: PriceFieldProps) {
  const { label, currency = "KD", labelId } = props;
  return (
    <FormControl variant="outlined">
      <InputLabel id={labelId || "selectLabel"}>{props.label}</InputLabel>
      <OutlinedInput
        type="text"
        placeholder={label}
        sx={priceInput}
        startAdornment={
          <InputAdornment position="start">{currency}</InputAdornment>
        }
        {...props}
      />
    </FormControl>
  );
}

export default PriceField;
