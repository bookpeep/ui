import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import * as React from "react";

import palette from "../theme/palette";
import { ArrowLeft } from "..";

export interface ModalProps {
  open: boolean;
  title: string;
  onClose: any;
  children: any;
  actions?: any;
}

const Transition = React.forwardRef(function Transition(props: any, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function Modal(props: ModalProps) {
  const { open, onClose, children, actions, title } = props;

  return (
    <div>
      <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar
          sx={{
            position: "relative",
            borderBottom: `1px solid ${palette.common.gray}25`,
          }}
          color="transparent"
          elevation={0}
        >
          <Grid container alignItems="center" sx={{ padding: "16px 24px" }}>
            <Grid item xs={4}>
              {onClose && (
                <IconButton
                  color="inherit"
                  onClick={() => onClose()}
                  aria-label="close"
                >
                  <ArrowLeft />
                </IconButton>
              )}
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="h3">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {actions}
            </Grid>
          </Grid>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
}

export default Modal;
