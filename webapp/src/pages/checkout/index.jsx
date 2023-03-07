import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Grid, Paper, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import validateInfo from "./validateInfo";

import { Link } from "react-router-dom";

const defaultData = {
  id: 0,
  first_name: "",
  last_name: "",
  room_number: "",
  email: "",
  phone_number: "",
  address: "",
  reservation_check_in_date: "",
  reservation_check_out_date: "",
  total_cost: "",
  deposit: "",
  rooms_id: "",
  facilities: "",
};

// destructing in FormSignUp function
const Checkout = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(defaultData);
  const [rooms, setRooms] = useState([]);
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

  const onRoomChange = (e) => {
    const roomId = e.target.value;
    changeRoomData(roomId);
  };

  // const handleChange = (e) => {
  //   setData({
  //     //spread operator--spreading the values first
  //     ...data,
  //     // targetting the name of each input of the form on FormSignUp
  //     [e.target.name]: e.target.value,
  //   });
  //   setFormErrors({
  //     ...formErrors,
  //     [e.target.name]: "",
  //   });
  // };

  useEffect(() => {
    axios.get("http://localhost:3001/room/getAll").then((response) => {
      setRooms(response.data);
    });
  }, [id]);

  useEffect(() => {
    // only load information from api if the id is present.
    if (id) {
      axios.get(`http://localhost:3001/room/get?id=${id}`).then((response) => {
        if (response.data) {
          setData({
            ...response.data[0],
            facilities: "",
          });

          changeRoomData(response.data[0].rooms_id);
        }
      });
    }
  }, [rooms]);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <legend>
        <h2>Checkout</h2>
      </legend>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
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
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">
            <Link to={`/roomCheckout/`} className="App-navigation">
              Checkout
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Checkout;
