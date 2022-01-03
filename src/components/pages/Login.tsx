import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import PasswordField from "../PasswordField";
import React from "react";

function Login() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign={"center"} sx={loginLogoWrapper}>
            <img src="https://placehold.co/68x28" alt="" />
          </Box>
          <Box sx={loginBoxWrapper}>
            <Card sx={loginCard}>
              <Grid container>
                <Grid item xs={12} mb="24px">
                  <Typography variant="h3">Login with email</Typography>
                </Grid>
                <Grid item xs={12} mb="24px">
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12} mb="8px">
                  <PasswordField fullWidth label="Password" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" color="primary" component="a">
                    Forgot password?
                  </Typography>
                </Grid>
                <Grid item xs={12} mt="30px">
                  <Button fullWidth>Log in</Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const loginBoxWrapper = {
  width: "480px",
  margin: "0 auto",
};

const loginCard = {
  padding: "24px 32px",
};

const loginLogoWrapper = {
  marginBottom: "40px",
  marginTop: "40px",
};

export default Login;
