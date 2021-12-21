import React from "react";
import { Meta, Story } from "@storybook/react";
import { SearchFieldProps, SearchField } from "../../src/components/SearchField";

const meta: Meta<SearchFieldProps> = {
  title: "Components/Inputs",
  component: SearchField,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

const SearchFieldTemplate: Story<SearchFieldProps> = (args) => <SearchField {...args} />;

export const SearchInput = SearchFieldTemplate.bind({});
SearchInput.args = {
  value: "Test password",
  label: "Password input",
  placeholder: "placeholder",
};
