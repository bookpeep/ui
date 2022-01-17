import { DeleteX, MagnifyingGlass } from "../icons";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import React from "react";
import palette from "../theme/palette";

export interface SearchFieldProps {
  value: any;
  label: string;
  placeholder?: string;
}

export function SearchField(props: SearchFieldProps) {
  const { label, value } = props;
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        type="text"
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
        {...props}
      />
    </FormControl>
  );
}

export default SearchField;
