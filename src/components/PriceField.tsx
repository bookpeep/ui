import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import palette from "../theme/palette";
import { muiDisabled } from "../theme/components/selectors";

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
      color: palette.common.gray
    },
  },
  input: {
    flex: "0 0 calc(100% - 72px)",
    background: palette.bg.blank,
    [muiDisabled]: {
      background: palette.bg.disabled
    }
  },
};

export function PriceField(props: PriceFieldProps) {
  const { label, value, disabled, currency = "KD", labelId } = props;
  return (
    <FormControl variant="outlined">
      <InputLabel id={labelId || "selectLabel"}>{props.label}</InputLabel>
      <OutlinedInput
        type="text"
        value={value}
        disabled={disabled}
        placeholder={label}
        sx={priceInput}
        label={label}
        startAdornment={
          <InputAdornment position="start">{currency}</InputAdornment>
        }
      />
    </FormControl>
  );
}

export default PriceField;
