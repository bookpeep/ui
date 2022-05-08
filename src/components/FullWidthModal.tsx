import * as React from "react";

import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Typography,
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

const Transition = React.forwardRef(function Transition(props: any, ref) {
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
        PaperProps={{
          sx: {
            overflow: "hidden",
          },
        }}
      >
        <AppBar
          sx={{
            borderBottom: `1px solid ${palette.common.gray}25`,
            backgroundColor: "white",
            minHeight: "81px",
          }}
          elevation={0}
          position={"sticky"}
        >
          <Grid container alignItems="center" sx={{ padding: "16px 24px" }}>
            <Grid item xs={4}>
              {onClose && (
                <IconButton onClick={() => onClose()} aria-label="close">
                  <ArrowLeft sx={{ fontColor: "black" }} />
                </IconButton>
              )}
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{ textAlign: "center", ml: 2, flex: 1, color: "black" }}
                variant="h3"
                component="h3"
              >
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

export default FullWidthModal;
