import * as React from "react";

import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";

import { Close } from "..";
import palette from "../theme/palette";

export interface ModalProps {
  open: boolean;
  title: string;
  onClose: any;
  children: any;
  actions?: any;
  headerActions?: any;
}

const Transition = React.forwardRef(function Transition(props: any, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Modal(props: ModalProps) {
  const { open, onClose, children, title, headerActions } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: { width: "100%", maxWidth: "500px" },
        }}
      >
        <AppBar
          sx={{
            position: "relative",
            borderBottom: `1px solid ${palette.common.gray}25`,
          }}
          color="transparent"
          elevation={0}
        >
          <Grid container alignItems="center" sx={{ padding: "16px 24px" }}>
            <Grid item xs={8}>
              {headerActions ? (
                headerActions
              ) : (
                <Typography variant="h3" component="h3">
                  {title}
                </Typography>
              )}
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              {onClose && (
                <IconButton
                  color="inherit"
                  onClick={() => onClose()}
                  aria-label="close"
                >
                  <Close />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </AppBar>

        {children}
      </Dialog>
    </div>
  );
}

export default Modal;
