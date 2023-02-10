import React from "react";
import useForm from "./useForm"; //hook
import validateInfo from "./validateInfo"; // import function
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline, Paper, Link } from "@mui/material";

// destructing in FormSignUp function
const AddEmployee = ({ submitForm }) => {
  // extract data from useForm
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* come back to put action and method */}

          <form onSubmit={handleSubmit}>
            <legend>
              <h2>Add employee</h2>
            </legend>
            <Grid container rowSpacing={1}>
              <Grid item xs={6}>
                <TextField
                  error={errors.fname ? "error" : ""}
                  helperText={errors.fname}
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                  value={values.fname}
                  onChange={handleChange}
                  label="First name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={errors.lname ? "error" : ""}
                  helperText={errors.lname}
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                  value={values.lname}
                  onChange={handleChange}
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={errors.email ? "error" : ""}
                  helperText={errors.email}
                  type="email"
                  id="personalEmail"
                  name="personalEmail"
                  placeholder="Enter personal email"
                  value={values.personalEmail}
                  onChange={handleChange}
                  label="Personal email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={errors.email ? "error" : ""}
                  helperText={errors.email}
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  placeholder="Enter company email"
                  value={values.companyEmail}
                  onChange={handleChange}
                  label="Company email"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  // error={errors.phone ? "error" : ""}
                  // helperText={errors.phone}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  // value={values.phone}
                  onChange={handleChange}
                  label="Phone"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  // error={errors.password2 ? "error" : ""}
                  // helperText={errors.password2}
                  type="address"
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  // value={values}
                  onChange={handleChange}
                  label="Enter address"
                  multiline
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ mr: 3 }}>
                  Add employee
                </Button>
                <Button type="submit" variant="contained">
                  <Link href="/employee" underline="none" color="inherit">
                    {"Cancel"}
                  </Link>
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

export default AddEmployee;
