import React from "react";
import {
  Container,
  Grid,
  TextField,
  Card,
  Box,
  Typography,
  Button,
} from "@mui/material";
import PasswordField from "../PasswordField";

function Login() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={loginLogoWrapper}>
            <img src="https://placehold.co/68x28" alt="" />
          </Box>
          <Box sx={loginBoxWrapper}>
            <Card sx={loginCard}>
              <Grid container>
                <Grid xs={12} mb="24px">
                  <Typography variant="h3">Login with email</Typography>
                </Grid>
                <Grid xs={12} mb="24px">
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid xs={12} mb="8px">
                  <PasswordField fullWidth label="Password" />
                </Grid>
                <Grid xs={12}>
                  <Typography variant="h5" color="primary" component="a">
                    Forgot password?
                  </Typography>
                </Grid>
                <Grid xs={12} mt="30px">
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
  textAlign: "center",
  marginBottom: "40px",
  marginTop: "40px",
};

export default Login;
