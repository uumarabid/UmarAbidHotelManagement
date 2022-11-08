import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo"; // import function
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline, Paper } from "@mui/material";

const FormSignUp = () => {
  // extract data from useForm
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* come back to put action and method */}

          <form onSubmit={handleSubmit}>
            <legend>Create your account</legend>
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
                  value={values.username}
                  onChange={handleChange}
                  label="username"
                  variant="outlined"
                />
                {errors.username && <p>{errors.username}</p>}
              </Grid>
              <Grid item xs={4}>
                <label for="email">Email</label>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  label="Email"
                  variant="outlined"
                />
                {errors.email && <p>{errors.email}</p>}
              </Grid>

              <Grid item xs={4}>
                <label for="password">Password</label>
              </Grid>

              <Grid item xs={8}>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  label="Password"
                  variant="outlined"
                />
                {errors.password && <p>{errors.password}</p>}
              </Grid>

              <Grid item xs={4}>
                <label for="password2">Confirm password</label>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm your password"
                  value={values.password2}
                  onChange={handleChange}
                  label="Confirm password"
                  variant="outlined"
                />
                {errors.password2 && <p>{errors.password2}</p>}
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
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default FormSignUp;
