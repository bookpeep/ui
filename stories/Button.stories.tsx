import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "@mui/material";

const meta: Meta<ButtonProps> = {
  title: "Button",
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default button" };

export const Outlined = Template.bind({});
Outlined.args = { children: "Outlined button", variant: "outlined" };
