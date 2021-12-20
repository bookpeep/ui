import React from "react";
import { Meta, Story } from "@storybook/react";
import { PasswordFieldProps, PasswordField } from "../../src/components/PasswordField";

const meta: Meta<PasswordFieldProps> = {
  title: "Components/Inputs",
  component: PasswordField,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

const PasswordFieldTemplate: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

export const PasswordInput = PasswordFieldTemplate.bind({});
PasswordInput.args = {
  value: "Test password",
  label: "Password input",
  placeholder: "placeholder",
};
