import React, { useEffect, useInsertionEffect, useState } from "react";
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
  employee_id: 0,
  employee_name: "",
  personal_email: "",
  company_email: "",
  phone: "",
  address: "",
  is_admin: false,
};

// destructing in FormSignUp function
const AddUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);
  const [employees, setEmployees] = useState([]);
  const [formErrors, setFormErrors] = useState(defaultData);

  const changeEmployeeData = (empId) => {
    const employee = employees.find((x) => x.id === empId);

    if (employee !== undefined) {
      setData({
        ...data,
        employee_id: empId,
        first_name: employee?.first_name,
        last_name: employee?.last_name,
        address: employee?.address,
        phone: employee?.phone,
        personal_email: employee?.personal_email,
        company_email: employee?.company_email,
      });
    }
  };
  const onEmployeeChange = (e) => {
    const empId = e.target.value;
    changeEmployeeData(empId);
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
  }, [id]);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/user/get?id=${id}`).then((response) => {
        if (response.data) {
          // const users = [];
          // for (let user of response.data) {
          //   users.push({
          //     ...user,
          //     //is_admin: user.is_admin.data[0] === 0 ? false : true,
          //   });
          // }
          setData({
            ...response.data[0],
            first_name: "",
            last_name: "",
            address: "",
            phone: "",
            personal_email: "",
            company_email: "",
          });
          changeEmployeeData(response.data[0].employee_id);
        }
      });
    }
  }, [employees]);

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

      const user = {
        id: data.id,
        user_name: data.user_name,
        password: data.password,
        employee_id: data.employee_id,
        is_admin: 0,
      };

      axios.post(`http://localhost:3001/user/${operation}`, user).then((response) => {
        console.log(response.data);
      });

      navigate("/user");
    }
  };
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
                name="employee_id"
                id="employee_id"
                value={data.employee_id}
                label="Room type"
                onChange={onEmployeeChange}
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
            id="first_name"
            name="first_name"
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
            id="last_name"
            name="last_name"
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
            id="personal_email"
            name="personal_email"
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
            id="company_email"
            name="company_email"
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
            error={formErrors.user_name ? true : false}
            helperText={formErrors.user_name}
            type="user_name"
            id="user_name"
            name="user_name"
            placeholder="Enter username"
            value={data.user_name}
            onChange={handleChange}
            label="Username"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={formErrors.password ? true : false}
            helperText={formErrors.password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            label="Password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          {/* <FormControlLabel control={<Checkbox checked={data?.is_admin?.data[0] === 0 ? false : true} />} label="Is admin" /> */}
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" sx={{ mr: 3 }} onClick={() => SubmitHandler()}>
            Save
          </Button>
          <Button variant="contained" onClick={() => cancelHandelder()}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddUser;
