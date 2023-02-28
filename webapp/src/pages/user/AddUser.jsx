import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import useForm from "../login/useForm"; //hook
import validateInfo from "./validateInfo"; // import function
import {
  Button,
  TextField,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import axios from "axios";

const defaultData = {
  id: 0,
  first_name: "",
  last_name: "",
  user_name: "",
  password: "",
  employee_name: "",
  personal_email: "",
  company_email: "",
  phone: "",
  address: "",
  is_admin: "",
};

// destructing in FormSignUp function
const AddUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);
  const [employees, setEmployees] = useState([]);
  const [formErrors, setFormErrors] = useState(defaultData);

  const loadEmployeeInformation = (e) => {
    const empId = e.target.value;
    const employee = employees.find((x) => x.id === empId);
    setData(employee);
  };

  const handleChange = (e) => {
    setData({
      //spread operator--spreading the values firsc
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
    axios.get("http://localhost:3001/employee/getAll").then((response) => {
      setEmployees(response.data);
    });

    if (id) {
      axios.get(`http://localhost:3001/user/get?id=${id}`).then((response) => {
        if (response.data) {
          setData(response.data[0]);
        }
      });
    }
  }, [id]);

  const cancelHandelder = () => {
    navigate("/user");
  };

  const SubmitHandler = () => {
    const { errors, hasError } = validateInfo(data);
    setFormErrors(errors);

    if (!hasError) {
      // call save funciton
      let operation = "add";
      if (data.id) {
        operation = "edit";
      }

      axios.post(`http://localhost:3001/user/${operation}`, data).then((response) => {
        console.log(response.data);
      });

      navigate("/user");
    }
  };
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <form>
        <legend>
          <h2>Add User</h2>
        </legend>
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <FormControl sx={{ mb: 1, minWidth: 210 }}>
              <InputLabel id="employee-label">Employee</InputLabel>
              {employees && (
                <Select
                  labelId="employee-label"
                  id="employee"
                  value={data.employee_id}
                  defaultValue={data.employee_id}
                  label="Room type"
                  onChange={loadEmployeeInformation}
                >
                  {employees.map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.first_name} {item.last_name}
                    </MenuItem>
                  ))}
                </Select>
              )}
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
              value={data.first_name}
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
              value={data.last_name}
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
              value={data.personal_email}
              // onChange={handleChange}
              label="Personal email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              disabled
              // helperText={errors.email}
              type="email"
              id="companyEmail"
              name="companyEmail"
              placeholder="Enter company email"
              value={data.company_email}
              // onChange={handleChange}
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
              value={data.phone}
              // onChange={handleChange}
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
              value={data.address}
              // onChange={handleChange}
              label="Enter address"
              multiline
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              // error={errors.username ? "error" : ""}
              // helperText={errors.username}
              type="username"
              id="username"
              name="username"
              placeholder="Enter username"
              // value={data.username}
              // onChange={handleChange}
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              // error={errors.password ? "error" : ""}
              // helperText={errors.password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              // value={data.password}
              // onChange={handleChange}
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<Checkbox />} label="Is admin" />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ mr: 3 }} onClick={() => SubmitHandler()}>
              Save
            </Button>
            <Button variant="contained" onClick={() => cancelHandelder()}>
              Cancel
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
  );
};

export default AddUser;
