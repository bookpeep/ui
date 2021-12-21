import React from "react";
import { Meta, Story } from "@storybook/react";
import { SelectFieldProps, SelectField } from "../src/components/SelectField";

const meta: Meta<SelectFieldProps> = {
  title: "Button",
  component: SelectField,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    items: {
      control: { type: "array" },
    },
    itemValue: {
      control: { type: "text" },
    },
    itemText: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
  },
};

export default meta;

const defaultItems = [
  {
    id: 1,
    name: "Item number 1",
  },
  {
    id: 2,
    name: "Item number 2",
  },
  {
    id: 3,
    name: "Item number 3",
  },
  {
    id: 4,
    name: "Item number 4",
  },
  {
    id: 5,
    name: "Item number 5",
  },
];

const SelectTemplate: Story<SelectFieldProps> = (args) => (
  <SelectField items={defaultItems} {...args} />
);

export const SelectInput = SelectTemplate.bind({});
SelectInput.args = {
  value: 0,
  label: "Default input",
  placeholder: "placeholder",
};
