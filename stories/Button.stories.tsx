import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "@mui/material";
import ThemeProvider from "./ThemeProvider";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,

  //   parameters: {
  //     backgrounds: {
  //       values: [
  //         { name: 'red', value: '#f00' },
  //         { name: 'green', value: '#0f0' },
  //         { name: 'blue', value: '#00f' },
  //       ],
  //     },
  //   },
  //   argTypes: {
  //     onClick: { action: '[onClick] Button' },
  //     onMouseEnter: { acttion: '[onMouseEnter] Button' },
  //     onMouseLeave: { acttion: '[onMouseLeave] Button' },
  //     children: {
  //       control: {
  //         type: 'text',
  //       },
  //     },
  //   },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default button" };

export const Outlined = Template.bind({});
Outlined.args = { children: "Outlined Button", variant: "outlined" };
