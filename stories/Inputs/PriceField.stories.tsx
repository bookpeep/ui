import React from "react";
import { Meta, Story } from "@storybook/react";
import { PriceFieldProps, PriceField } from "../../src/components/PriceField";

const meta: Meta<PriceFieldProps> = {
  title: "Components/Inputs",
  component: PriceField,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

const SearchFieldTemplate: Story<PriceFieldProps> = (args) => <PriceField {...args} />;

export const PriceInput = SearchFieldTemplate.bind({});
PriceInput.args = {
  value: "Test password",
  label: "Password input",
  placeholder: "placeholder",
};
