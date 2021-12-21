import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormHelperTextProps,
  InputLabel,
  MenuItem,
  MenuItemProps,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";

interface itemArray {
  [key: string]: string | number;
}

export interface SelectFieldProps {
  itemValue?: string;
  itemText?: string;
  items?: itemArray[];
  value: string | number;
  FormControlProps: FormControlProps;
  MenuItemProps: MenuItemProps;
  SelectProps: SelectProps;
  label: string;
  FormHelperTextProps: FormHelperTextProps;
  disabled: boolean;
  error: boolean;
  labelId?: string;
  helperText?: string;
  placeholder?: string;
}

export function SelectField(props: SelectFieldProps) {
  const {
    items,
    itemValue = "id",
    itemText = "name",
    labelId,
    helperText,
    placeholder,
    error
  } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={labelId || "selectLabel"}>{props.label}</InputLabel>
      <Select labelId={labelId || "selectLabel"} {...props}>
        {placeholder && (
          <MenuItem disabled value={0}>
            {placeholder}
          </MenuItem>
        )}
        {items?.map((item) => (
          <MenuItem value={item[itemValue]}>{item[itemText]}</MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default SelectField;
