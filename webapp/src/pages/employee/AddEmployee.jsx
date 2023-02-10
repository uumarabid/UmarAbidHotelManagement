import React from "react";
import useForm from "../login/useForm"; //hook
import { useNavigate } from "react-router-dom";
import validateInfo from "./validateInfo"; // import function
import { Button, TextField, Grid, Paper, Link } from "@mui/material";

// destructing in FormSignUp function
const AddEmployee = () => {
  // extract data from useForm
  const SubmitHandler = () => {
    // call save funciton
    useNavigate("/employee");
  };

  const { handleChange, values, handleSubmit, errors } = useForm(SubmitHandler(), validateInfo);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      {/* come back to put action and method */}

      <form onSubmit={handleSubmit}>
        <legend>
          <h2>Add employee</h2>
        </legend>
        <Grid container rowSpacing={1}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              error={errors.fname || false}
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
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              error={errors.lname || false}
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
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              error={errors.personalEmail || false}
              helperText={errors.personalEmail}
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
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              error={errors.companyEmail || false}
              helperText={errors.companyEmail}
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

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              error={errors.phone || false}
              helperText={errors.phone}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={values.phone}
              onChange={handleChange}
              label="Phone"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
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
            <Button type="submit" variant="contained" sx={{ mr: 3 }} onClick={SubmitHandler}>
              Save
            </Button>
            <Button type="submit" variant="contained">
              <Link href="/employee" underline="none" color="inherit">
                Cancel
              </Link>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddEmployee;
