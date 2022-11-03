import React from "react";
import useForm from "./useForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline } from "@mui/material";

const FormSignUp = () => {
  // extract data from useForm
  const { handleChange, values, handleSubmit } = useForm();
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        {/* come back to put action and method */}

        <form onSubmit={handleSubmit}>
          <legend>Create your account</legend>
          <Grid container rowSpacing={1}>
            <Grid item xs={4}>
              <label for="username">Username</label>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="username"
                name="username"
                placeholder="Enter your username"
                value={values.email}
                onChange={handleChange}
                label="username"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <label for="email">Email</label>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="email"
                name="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                label="Email"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={4}>
              <label for="password">Password</label>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                label="Password"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={4}>
              <label for="password2">Confirm password</label>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="password2"
                name="password2"
                placeholder="Confirm your password"
                value={values.password2}
                onChange={handleChange}
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <span>
                Already have an account? Login <a href="#">here</a>
              </span>
            </Grid>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default FormSignUp;
