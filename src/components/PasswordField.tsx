import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

import { Eye } from "../icons";

export interface PasswordFieldProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export function PasswordField(props: PasswordFieldProps) {
  const { error, label, value, helperText, fullWidth } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl fullWidth={fullWidth} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? (
                <Eye color="primary" />
              ) : (
                <Eye color="disabled" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        {...props}
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default PasswordField;
