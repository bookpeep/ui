import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  ConfirmModal,
  ConfirmModalProps,
} from "../../src/components/ConfirmModal";
import { Button } from "@mui/material";

const meta: Meta<ConfirmModalProps> = {
  title: "Components/Modals",
  component: ConfirmModal,
  argTypes: {},
};

export default meta;

const ModalActions = () => (
  <Button autoFocus color="inherit">
    save
  </Button>
);

const ConfirmDialogTemplate: Story<ConfirmModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open confirm width modal
      </Button>
      <ConfirmModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        title="Void Invoice"
        description="Are you sure you want to void this invoice? This action 
        is permanent and can’t be undone."
        actions={<ModalActions />}
        {...args}
      />
    </div>
  );
};

export const ConfirmDialog = ConfirmDialogTemplate.bind({});
ConfirmDialog.args = {};
