import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Grid, Paper } from "@mui/material";
import validateInfo from "./validateInfo";
import Box from "@mui/material/Box";
import { isAuthenticated } from "../../components/userContext";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const defaultData = {
  first_name: "",
  last_name: "",
  number_of_guests: "",
  address: "",
  phone_number: "",
  email: "",
  check_in_date: "",
  check_out_date: "",
  is_reserved: "",
};

// destructing in FormSignUp function
const AddGuest = () => {
  // https://reactrouter.com/en/main/hooks/use-navigate
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(defaultData);

  //vlues for date range picker
  const [value, setValue] = useState([null, null]);

  const handleChange = (e) => {
    setData({
      //spread operator--spreading the values first
      ...data,
      // targetting the name of each input of the form on FormSignUp
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  useEffect(() => {
    // only load information from api if the id is present.
    if (id) {
      axios.get(`http://localhost:3001/guest/get?id=${id}`).then((response) => {
        if (response.data) {
          setData(response.data[0]);
        }
      });
    }
  }, [id]);

  const CancelHandler = () => {
    navigate("/guest");
  };

  // extract data from useForm
  const SubmitHandler = () => {
    const { errors, hasError } = validateInfo(data);
    setFormErrors(errors);

    if (!hasError) {
      // call save funciton
      let operation = "add";
      if (data.id) {
        operation = "edit";
      }

      const saveData = {
        ...data,
        is_reserved: 0,
        currentUserId: isAuthenticated().userId,
      };
      axios.post(`http://localhost:3001/guest/${operation}`, saveData).then((response) => {
        console.log(response.data);
      });

      navigate("/guest");
    }
  };

  return (
    <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <legend>
        <h2>Add Guest</h2>
      </legend>
      <Grid container rowSpacing={1}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            error={formErrors.first_name ? true : false}
            helperText={formErrors.first_name}
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
            error={formErrors.last_name ? true : false}
            helperText={formErrors.last_name}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter last name"
            onChange={handleChange}
            value={data.last_name}
            label="Last name"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            type="number"
            id="number_of_guests"
            name="number_of_guests"
            placeholder="Number of guests"
            value={data.number_of_guests}
            onChange={handleChange}
            label="Number of guests"
            multiline
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

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            error={formErrors.phone ? true : false}
            helperText={formErrors.phone}
            type="tel"
            id="phone_number"
            name="phone_number"
            placeholder="Enter phone number"
            onChange={handleChange}
            value={data.phone_number}
            label="Phone"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            error={formErrors.email ? true : false}
            helperText={formErrors.email}
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={data.email}
            label="Email"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            disabled
            type="number"
            id="is_reserved"
            name="is_reserved"
            placeholder="Is reserved"
            value={data.address}
            onChange={handleChange}
            label="Is reserved"
            variant="outlined"
          />
        </Grid>

        {/* <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: "Check-in", end: "Check-out" }}>
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider> */}

        <Grid item xs={12}>
          <Button variant="contained" sx={{ mr: 3 }} onClick={() => SubmitHandler()}>
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

export default AddGuest;
