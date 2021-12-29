import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  FullWidthModal,
  FullWidthModalProps,
} from "../../src/components/FullWidthModal";
import { Button } from "@mui/material";

const meta: Meta<FullWidthModalProps> = {
  title: "Components/Modals",
  component: FullWidthModal,
  argTypes: {},
};

export default meta;

const ModalActions = () => (
  <Button autoFocus color="inherit">
    save
  </Button>
);

const FullWidthModalTemplate: Story<FullWidthModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open full width modal
      </Button>
      <FullWidthModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        title="Full width test modal"
        actions={<ModalActions />}
        {...args}
      />
    </div>
  );
};

export const FullWidthDialog = FullWidthModalTemplate.bind({});
FullWidthDialog.args = { children: "Default Full Width Modal" };
