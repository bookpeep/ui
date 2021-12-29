import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "@mui/material";


const meta: Meta<CardProps> = {
  title: "Login Page",
  component: Card,
  argTypes: {},
};

export default meta;

const CardTemplate: Story<CardProps> = (args) => (
  <Card sx={{ width: "200px", height: "200px" }} {...args} />
);

export const Cards = CardTemplate.bind({});
Cards.args = {
  value: 0,
  label: "Default input",
  placeholder: "placeholder",
};
