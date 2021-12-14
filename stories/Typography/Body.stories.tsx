import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "@mui/material";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography/Body",
  component: Typography,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    fontWeight: {
      options: [400, 500, 700],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Primary Variant", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { children: "Secondary Variant", variant: "secondary" };
