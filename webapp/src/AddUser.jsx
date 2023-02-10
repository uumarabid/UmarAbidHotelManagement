import React from "react";
import useForm from "./useForm"; //hook
import validateInfo from "./validateInfo"; // import function
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  TextField,
  Container,
  Grid,
  CssBaseline,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

// destructing in FormSignUp function
const AddUser = ({ submitForm }) => {
  // extract data from useForm
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <form onSubmit={handleSubmit}>
            <legend>
              <h2>Add User</h2>
            </legend>
            <Grid container rowSpacing={1}>
              <Grid item xs={6}>
                <FormControl sx={{ mb: 1, minWidth: 210 }}>
                  <InputLabel id="employee-label">Employee</InputLabel>
                  <Select
                    labelId="employee-label"
                    id="employee"
                    value={[]}
                    label="Room type"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Standard</MenuItem>
                    <MenuItem value={20}>Deluxe</MenuItem>
                    <MenuItem value={30}>Suites</MenuItem>
                    <MenuItem value={40}>Executive</MenuItem>
                    <MenuItem value={50}>Luxury</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  disabled
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  label="First name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  disabled
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  disabled
                  type="email"
                  id="personalEmail"
                  name="personalEmail"
                  placeholder="Enter personal email"
                  onChange={handleChange}
                  label="Personal email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  disabled
                  helperText={errors.email}
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  placeholder="Enter company email"
                  onChange={handleChange}
                  label="Company email"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  disabled
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                  label="Phone"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  disabled
                  type="address"
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  onChange={handleChange}
                  label="Enter address"
                  multiline
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={errors.username ? "error" : ""}
                  helperText={errors.username}
                  type="username"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  value={values.username}
                  onChange={handleChange}
                  label="Username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={errors.password ? "error" : ""}
                  helperText={errors.password}
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
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Is admin" />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ mr: 3 }}>
                  Add user
                </Button>
                <Button type="submit" variant="contained">
                  <Link href="/user" underline="none" color="inherit">
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

export default AddUser;
