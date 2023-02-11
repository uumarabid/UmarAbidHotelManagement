import React, { useEffect, useState } from "react";
import useForm from "../login/useForm"; //hook
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import validateInfo from "./validateInfo"; // import function
import { Button, TextField, Grid, Paper } from "@mui/material";

const defaultData = {
  first_name: "",
  last_name: "",
  address: "",
  phone: "",
  personal_email: "",
  company_email: "",
};

// destructing in FormSignUp function
const AddEmployee = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);

  const handleChange = (e) => {
    setData({
      //spread operator--spreading the values first
      ...data,
      // targetting the name of each input of the form on FormSignUp
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // only load information from api if the id is present.
    if (id) {
      axios.get(`http://localhost:3001/employee/get?id=${id}`).then((response) => {
        if (response.data) {
          setData(response.data[0]);
        }
      });
    }
  }, [id]);

  const CancelHandler = () => {
    navigate("/employee");
  };

  // extract data from useForm
  const SubmitHandler = () => {
    // call save funciton
    let operation = "add";
    if (data.id) {
      operation = "edit";
    }

    axios.post(`http://localhost:3001/employee/${operation}`, data).then((response) => {
      console.log(response.data);
    });

    navigate("/employee");
  };

  // const { handleChange, values, handleSubmit, errors } = useForm(SubmitHandler, validateInfo);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <legend>
        <h2>Add employee</h2>
      </legend>
      <Grid container rowSpacing={1}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={errors.fname || false}
            // helperText={errors.fname}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={data.first_name}
            label="First name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={errors.lname || false}
            // helperText={errors.lname}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={data.last_name}
            label="Last name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={errors.personalEmail || false}
            // helperText={errors.personalEmail}
            type="email"
            id="personal_email"
            name="personal_email"
            placeholder="Enter personal email"
            onChange={handleChange}
            value={data.personal_email}
            label="Personal email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={errors.companyEmail || false}
            // helperText={errors.companyEmail}
            type="email"
            id="company_email"
            name="company_email"
            placeholder="Enter company email"
            onChange={handleChange}
            value={data.company_email}
            label="Company email"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={errors.phone || false}
            // helperText={errors.phone}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
            value={data.phone}
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
            value={data.address}
            onChange={handleChange}
            label="Enter address"
            multiline
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" sx={{ mr: 3 }} onClick={() => SubmitHandler()}>
            Save
          </Button>
          <Button variant="contained" onClick={() => CancelHandler()}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddEmployee;
