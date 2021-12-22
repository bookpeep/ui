import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Modal,
  ModalProps,
} from "../../src/components/Modal";
import { Button } from "@mui/material";

const meta: Meta<ModalProps> = {
  title: "Components/Modals",
  component: Modal,
  argTypes: {},
};

export default meta;

const ModalActions = () => (
  <Button autoFocus color="inherit">
    save
  </Button>
);

const RegularModal: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open medium width modal
      </Button>
      <Modal
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

export const MediumModal = RegularModal.bind({});
MediumModal.args = { children: "Default Medium Modal" };
