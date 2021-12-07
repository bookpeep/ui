import React from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { peepTheme } from "../src";

const StoryLayout = ({ children }) => (
  <MuiThemeProvider theme={peepTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
};

export const decorators = [
  (Story) => (
    <StoryLayout>
      <Story />
    </StoryLayout>
  ),
];
