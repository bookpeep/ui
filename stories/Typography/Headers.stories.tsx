import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyProps } from "@mui/material";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography/Headers",
  component: Typography,
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4", "h5"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.storyName = "H1";
H1.args = { children: "H1 Variant", variant: "h1" };

export const H2 = Template.bind({});
H2.storyName = "H2";
H2.args = { children: "H2 Variant", variant: "h2" };

export const H3 = Template.bind({});
H3.storyName = "H3";
H3.args = { children: "H3 Variant", variant: "h3" };

export const H4 = Template.bind({});
H4.storyName = "H4";
H4.args = { children: "H4 Variant", variant: "h4" };

export const H5 = Template.bind({});
H5.storyName = "H5";
H5.args = { children: "H5 Variant", variant: "h5" };
