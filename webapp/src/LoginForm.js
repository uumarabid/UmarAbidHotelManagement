import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline, Paper, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export const LoginForm = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* come back to put action and method */}

          <FormGroup>
            <legend>
              <h2>Welcome to login page</h2>
            </legend>
            <Grid container rowSpacing={1}>
              <Grid item xs={4}>
                <label for="username">Username</label>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  label="username"
                  variant="outlined"
                />
              </Grid>

              {/* <Grid item xs={4}>
                <label for="email">Email</label>
              </Grid>
              <Grid item xs={8}>
                <TextField type="email" id="email" name="email" placeholder="email" label="Email" variant="outlined" />
              </Grid> */}

              <Grid item xs={4}>
                <label for="password">Password</label>
              </Grid>

              <Grid item xs={8}>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  label="Password"
                  variant="outlined"
                />
              </Grid>

              {/* <Grid item xs={4}>
                <label for="password2">Confirm password</label>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm your password"
                  label="Confirm password"
                  variant="outlined"
                />
              </Grid> */}

              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me login" />
              </Grid>

              <Grid item xs={12}>
                {/* <a href="#">Forgot password</a> */}
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Sign in
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <span>
                  Don't have an account? Register <a href="/AddUser">here</a>
                </span>
              </Grid>
            </Grid>
          </FormGroup>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
