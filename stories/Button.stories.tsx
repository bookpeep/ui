import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "@mui/material";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "error", "warning"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = ButtonTemplate.bind({});
Default.args = { children: "Default button" };

export const Outlined = ButtonTemplate.bind({});
Outlined.args = { children: "Outlined button", variant: "outlined" };
