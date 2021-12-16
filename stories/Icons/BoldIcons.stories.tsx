/// <reference path="../../src/index.tsx" />

import React from "react";
import { Meta, Story } from "@storybook/react";
import { Box, SvgIcon, Typography } from "@mui/material";
import { AfternoonSun, EveningCrescent, MorningSun } from "../../src/icons";
import { SvgIconPropsWithBold } from "../../src/icons/extended/types";
import copy from "copy-to-clipboard";

const icons = {
  AfternoonSun,
  EveningCrescent,
  MorningSun,
};

const meta: Meta<SvgIconPropsWithBold> = {
  title: "Icons/Extended/Bold",
  component: SvgIcon,
  argTypes: {
    color: {
      control: "text",
    },
    bold: {
      control: "boolean",
    },
  },
};

export default meta;

const Template: Story<SvgIconPropsWithBold> = (args) => (
  <Box display="grid" gridTemplateColumns="auto auto auto auto auto">
    {Object.entries(icons).map(([iconName, Icon]) => (
      <Box
        key={iconName}
        onClick={() => {
          copy(iconName);
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          cursor: "pointer",
          border: "1px solid transparent",
          "&:hover": {
            borderColor: "primary.main",
          },
        }}
      >
        <Icon {...args} />
        <Typography mt="5px" variant="secondary">
          {iconName}
        </Typography>
      </Box>
    ))}
  </Box>
);

export const AllIcons = Template.bind({});
AllIcons.args = { color: "primary", fontSize: "large" };
