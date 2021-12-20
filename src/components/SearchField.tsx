import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { MagnifyingGlass, DeleteX } from "../icons";
import palette from "../theme/palette";
export interface SearchFieldProps {
  value: any;
  label: string;
  disabled: boolean;
  placeholder?: string;
}

export function SearchField(props: SearchFieldProps) {
  const { label, value, disabled } = props;
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        type="text"
        value={value}
        disabled={disabled}
        placeholder={label}
        sx={{
          background: palette.bg.lightestGray,
          borderRadius: "8px",
          input: {
            padding: "14px 12px 14px 2px !important",
          },
          fieldset: {
            border: "none",
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlass />
          </InputAdornment>
        }
        endAdornment={
          value && (
            <InputAdornment position="end">
              <IconButton
                sx={{
                  color: palette.common.gray + "24",
                }}
              >
                <DeleteX fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
}

export default SearchField;
