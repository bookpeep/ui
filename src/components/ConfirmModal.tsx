import {
  Box,
  Dialog,
  DialogActions,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import * as React from "react";

import { Close } from "../icons";
import palette from "../theme/palette";

export interface ConfirmModalProps {
  open: boolean;
  onClose: any;
  children: any;
  actions?: any;
  title?: string;
  description?: string;
}

const Transition = React.forwardRef(function Transition(props: any, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ConfirmModal(props: ConfirmModalProps) {
  const { open, onClose, children, actions, title, description } = props;

  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            width: "580px",
            minHeight: "300px",
          },
        }}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        {children ? (
          children
        ) : (
          <Box sx={{ padding: "24px", marginBottom: "auto" }}>
            <Box sx={{ textAlign: "right", marginBottom: "24px" }}>
              <IconButton onClick={onClose}>
                <Close fill="red" />
              </IconButton>
            </Box>
            <Box
              sx={{ textAlign: "center", maxWidth: "360px", margin: "auto" }}
            >
              <Typography variant="h1" sx={{ marginBottom: "16px" }}>
                {title}
              </Typography>
              <Typography fontWeight={400} variant="primary">
                {description}
              </Typography>
            </Box>
          </Box>
        )}
        <DialogActions
          sx={{
            padding: "24px",
            borderTop: `1px solid ${palette.common.gray}25`,
          }}
        >
          {actions}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmModal;
