import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextFieldProps, TextField } from "@mui/material";

const meta: Meta<TextFieldProps> = {
  title: "Components/Inputs",
  component: TextField,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    helperText: {
      control: { type: "text" },
    },
    type: {
      control: {
        type: "select"
      },
      options: ["text", "number", "tel", "email", "password"],
    }
  },
};

export default meta;

const InputTemplate: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const TextInput = InputTemplate.bind({});
TextInput.args = {
  value: "Default Input",
  label: "Default input",
  placeholder: "placeholder",
};
