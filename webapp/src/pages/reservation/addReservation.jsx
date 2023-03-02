import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Grid, Paper, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import validateInfo from "./validateInfo";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const defaultData = {
  first_name: "",
  last_name: "",
  room_number: "",
  reservation_check_in_date: "",
  reservation_check_out_date: "",
  total_cost: "",
  extra_cost: "",
  deposit: "",
  room_type: "",
  facilities: "",
};

// destructing in FormSignUp function
const AddReservation = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(defaultData);
  const [rooms, setRooms] = useState([]);

  const [value, setValue] = useState(null);

  const changeRoomData = (roomId) => {
    const room = rooms.find((x) => x.id === roomId);

    if (room !== undefined) {
      setData({
        ...data,
        room_id: roomId,
        room_number: room?.room_number,
        room_type: room?.room_type,
        facilities: room?.facilities,
      });
    }
  };

  const onRoomChange = (e) => {
    const roomId = e.target.value;
    changeRoomData(roomId);
  };

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
    axios.get("http://localhost:3001/room/getAll").then((response) => {
      setRooms(response.data);
    });
  }, [id]);

  useEffect(() => {
    // only load information from api if the id is present.
    if (id) {
      axios.get(`http://localhost:3001/reservation/get?id=${id}`).then((response) => {
        if (response.data) {
          setData(response.data[0]);
        }
      });
    }
  }, [id]);

  const CancelHandler = () => {
    navigate("/reservation");
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

      axios.post(`http://localhost:3001/reservation/${operation}`, data).then((response) => {
        console.log(response.data);
      });

      navigate("/reservation");
    }
  };

  // date picker values
  // const [value, setValue] = React.useState(null);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <legend>
        <h2>Add/Edit Reservation</h2>
      </legend>
      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          <FormControl sx={{ mb: 1, minWidth: 210 }}>
            <InputLabel id="room_label">Room</InputLabel>
            {rooms && (
              <Select labelId="room_label" name="room_id" id="room_id" value={data.room_id} label="Room" onChange={onRoomChange}>
                {rooms.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.room_number} {item.room_type}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            disabled
            type="text"
            id="faciliries"
            name="faciliries"
            placeholder="Facilities"
            onChange={handleChange}
            value={data.facilities}
            label="Facilities"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <h2>Guest</h2>
        </Grid>

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Checkin/reservation date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Checkout/reservation date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={formErrors.phone ? true : false}
            // helperText={formErrors.phone}
            type="number"
            id="total_cost"
            name="total_cost"
            placeholder="Total cost"
            onChange={handleChange}
            value={data.total_cost}
            label="Total cost"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            // error={formErrors.phone ? true : false}
            // helperText={formErrors.phone}
            type="number"
            id="deposit"
            name="deposit"
            placeholder="Deposit"
            onChange={handleChange}
            value={data.deposit}
            label="Deposit"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={() => CancelHandler()}>
            Cancel
          </Button>

          <Button variant="contained" sx={{ mr: 3, ml: 3 }} onClick={() => SubmitHandler()}>
            Reserve
          </Button>
          <Button variant="contained" sx={{ mr: 3, ml: 3 }} onClick={() => SubmitHandler()}>
            Checkin
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddReservation;
