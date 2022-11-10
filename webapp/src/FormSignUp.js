import React from "react";
import useForm from "./useForm"; //hook
import validateInfo from "./validateInfo"; // import function
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline, Paper } from "@mui/material";

// destructing in FormSignUp function
const FormSignUp = ({ submitForm }) => {
  // extract data from useForm
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* come back to put action and method */}

          <form onSubmit={handleSubmit}>
            <legend>
              <h2>Create your account</h2>
            </legend>
            <Grid container rowSpacing={1}>
              <Grid item xs={4}>
                <label for="username">Username</label>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  error={errors.username ? "error" : ""}
                  helperText={errors.username && errors.username}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
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
                  error={errors.email ? "error" : ""}
                  helperText={errors.email && errors.email}
                  type="email"
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
                  error={errors.password ? "error" : ""}
                  helperText={errors.password && errors.password}
                  type="password"
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
                  error={errors.password2 ? "error" : ""}
                  helperText={errors.password2}
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm your password"
                  value={values.password2}
                  onChange={handleChange}
                  label="Confirm password"
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
                  Already have an account? Login <a href="/login">here</a>
                </span>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default FormSignUp;
