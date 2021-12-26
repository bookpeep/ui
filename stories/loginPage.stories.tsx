import React from "react";
import { Meta, Story } from "@storybook/react";
import Login from '../src/components/pages/Login'

const meta: Meta = {
  title: "Button",
  component: Login,
  argTypes: {},
};

export default meta;

const LoginTemplate: Story = (args) => (
  <Login {...args} />
);

export const Logins = LoginTemplate.bind({});
Logins.args = {
  value: 0,
  label: "Default input",
  placeholder: "placeholder",
};
