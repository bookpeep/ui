import * as React from "react";
import {
  Button,
  Dialog,
  AppBar,
  Box,
  IconButton,
  Typography,
  Slide,
  Grid,
} from "@mui/material";
import { ArrowLeft } from "..";
import palette from "../theme/palette";

export interface FullWidthModalProps {
  open: boolean;
  title: string;
  onClose: any;
  children: any;
  actions?: any;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function FullWidthModal(props: FullWidthModalProps) {
  const { open, onClose, children, actions, title } = props;

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
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
            <Grid item xs={4} align="left">
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
            <Grid item xs={4} align="center">
              <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="h3">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4} align="right">
              {actions}
            </Grid>
          </Grid>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
}

export default FullWidthModal;
