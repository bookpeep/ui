import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "@mui/material";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography/Active",
  component: Typography,
  argTypes: {
    variant: {
      options: ["link", "button"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Link = Template.bind({});
Link.args = { children: "Link Variant", variant: "link" };

export const Button = Template.bind({});
Button.args = { children: "Button Variant", variant: "button" };
