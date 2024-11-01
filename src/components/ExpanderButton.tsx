import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { memo } from "react";

import { dontForwardProps } from "../helpers/dontForwardProps";
import { ChevronDown } from "../icons";

const endIcon = "& .MuiButton-endIcon";

type ExpanderButtonProps = ButtonProps & {
  expanded: boolean;
};

const ExpanderButton = styled(
  (props: ExpanderButtonProps) => <Button endIcon={<ChevronDown />} {...props} />,
  dontForwardProps("expanded")
)<ExpanderButtonProps>(({ expanded, theme }) => ({
  [endIcon]: {
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.shorter,
    }),

    color: theme.palette.primary.main,
    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export default memo(ExpanderButton);
