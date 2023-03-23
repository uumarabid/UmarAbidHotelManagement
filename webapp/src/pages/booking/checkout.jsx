import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Grid, Paper, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import validateInfo from "./validateInfo";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";

const defaultData = {
  id: 0,
  first_name: "",
  last_name: "",
  room_number: "",
  room_type: "",
  email: "",
  phone_number: "",
  address: "",
  reservation_check_in_date: "",
  reservation_check_out_date: "",
  total_cost: "",
  extra_cost: "",
  deposit: "",
  rooms_id: "",
  facilities: "",
};

// destructing in FormSignUp function
const RoomCheckout = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(defaultData);
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]);
  const changeRoomData = (roomId) => {
    const room = rooms.find((x) => x.id === roomId);
    if (room !== undefined) {
      setData({
        ...data,
        rooms_id: roomId,
        facilities: room?.facilities,
      });
    }
  };

  const changeGuestData = (guestId) => {
    const guest = guests.find((x) => x.id === guestId);
    if (guest !== undefined) {
      setData({
        ...data,
        guest_id: guestId,
        first_name: guest?.first_name,
      });
    }
  };

  const onRoomChange = (e) => {
    const roomId = e.target.value;
    changeRoomData(roomId);
  };

  const changeReservationDate = (name, value) => {
    setData({
      //spread operator--spreading the values first
      ...data,
      // targetting the name of each input of the form on FormSignUp
      [name]: [value],
    });
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
      axios.get(`http://localhost:3001/guest/get?id=${id}`, data).then((response) => {
        if (response.data) {
          setData(response.data[0]);

          changeRoomData(response.data[0].rooms_id);
        }
      });
    }
  }, [rooms]);

  useEffect(() => {
    // only load information from api if the id is present.
    if (id) {
      axios.get(`http://localhost:3001/room/get?id=${id}`, data).then((response) => {
        if (response.data) {
          setData(response.data[0]);

          changeRoomData(response.data[0].rooms_id);
        }
      });
    }
  }, [rooms]);

  const CancelHandler = () => {
    navigate("/booking");
  };

  // extract data from useForm
  const SubmitHandler = () => {
    const { errors, hasError } = validateInfo(data);
    setFormErrors(errors);

    if (!hasError) {
      axios.post(`http://localhost:3001/booking/checkout`, data).then((response) => {
        console.log(response.data);
      });

      navigate("/booking");
    }
  };

  return (
    <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <h2>Room Checkout</h2>

      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          <TextField
            // disabled
            type="number"
            id="room_number"
            name="room_number"
            placeholder="Room number"
            label="Room number"
            variant="outlined"
            value={data.room_number}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            disabled
            type="text"
            id="room_type"
            name="room_type"
            placeholder="Room type"
            label="Room type"
            variant="outlined"
            value={data.room_type}
            onChange={handleChange}
          />
        </Grid>

        {/* <Grid item xs={6}>
          <FormControl sx={{ mb: 1, minWidth: 210 }}>
            <InputLabel id="room_label">Room</InputLabel>
            {rooms && (
              <Select
                labelId="room_label"
                name="rooms_id"
                id="rooms_id"
                value={data.rooms_id}
                label="Room"
                onChange={onRoomChange}
              >
                {rooms.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.room_number} {item.room_type}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        </Grid> */}

        {/* <Grid item xs={6} sm={6} md={6} lg={6}>
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
        </Grid> */}

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <TextField
            disabled
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
            disabled
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
            disabled
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
            error={formErrors.phone_number ? true : false}
            helperText={formErrors.phone_number}
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

        {/* <Grid item xs={6} sm={6} md={6} lg={6}>
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
        </Grid> */}

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="reservation_check_in_date"
              name="reservation_check_in_date"
              label="Checkin/reservation date"
              value={data.reservation_check_in_date}
              onChange={(newValue) => {
                changeReservationDate("reservation_check_in_date", newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="reservation_check_out_date"
              name="reservation_check_out_date"
              label="Checkout/reservation date"
              value={data.reservation_check_out_date}
              onChange={(newValue) => {
                changeReservationDate("reservation_check_out_date", newValue);
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
            id="extra_cost"
            name="extra_cost"
            placeholder="Extra cost"
            onChange={handleChange}
            value={data.extra_cost}
            label="Extra cost"
            variant="outlined"
          />
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

          <Button variant="contained" sx={{ ml: 3 }} onClick={() => SubmitHandler()}>
            Checkout
          </Button>

          {/* <Button variant="contained" sx={{ mr: 3, ml: 3 }} onClick={() => SubmitHandler()}>
            Reserve
          </Button>
          <Button variant="contained" sx={{ mr: 3, ml: 3 }} onClick={() => SubmitHandler()}>
            Checkin
          </Button> */}

          {/* <Grid item xs={12}>
            <Button variant="contained" onClick={() => CancelHandler()}>
              <Link to={`/checkout/${item.id}`} className="App-navigation">
              Edit
            </Link>
              Checkout
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RoomCheckout;
