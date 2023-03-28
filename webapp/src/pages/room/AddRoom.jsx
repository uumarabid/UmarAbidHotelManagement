import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, TextField, Grid, Paper, FormControlLabel, FormGroup } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import axios from "axios";
import { isAuthenticated } from "../../components/userContext";

const facilities = ["Fridge", "Dinning table with chairs", "Locker", "TV", "Hair dryer"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const defaultData = {
  room_number: "",
  room_type: "",
  floor_number: "",
  facilities: "",
};

const AddRoom = () => {
  const [roomFacilities, setRoomFacilities] = useState([]);
  const [data, setData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(defaultData);

  let navigate = useNavigate();
  const { id } = useParams();

  const handleFacilitiesChange = (event) => {
    const {
      target: { value },
    } = event;
    setRoomFacilities(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(roomFacilities);
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
    if (id) {
      axios.get(`http://localhost:3001/room/get?id=${id}`).then((response) => {
        if (response.data) {
          const facilitiesList = response.data[0].facilities.split(",").filter((item) => item !== "");
          setRoomFacilities(facilitiesList);
          setData(response.data[0]);
        }
      });
    }
  }, [id]);

  const cancelHandler = () => {
    navigate("/room");
  };

  const submitHandler = () => {
    let operation = "add";
    if (data.id) {
      operation = "edit";
    }
    const saveData = {
      ...data,
      facilities: roomFacilities.join(","),
      currentUserId: isAuthenticated().userId,
    };

    axios.post(`http://localhost:3001/room/${operation}`, saveData).then((response) => {
      console.log(response.data);
    });

    navigate("/room");
  };

  return (
    <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <FormGroup>
        <legend>
          <h2>Add room</h2>
        </legend>
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <TextField
              type="number"
              id="room_number"
              name="room_number"
              placeholder="Enter room number"
              label="Room number"
              variant="outlined"
              value={data.room_number}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ mb: 1, minWidth: 210 }}>
              <InputLabel id="roomType-label">Room type</InputLabel>
              <Select
                labelId="roomType-label"
                id="room_type"
                name="room_type"
                label="Room type"
                value={data.room_type}
                onChange={handleChange}
              >
                <MenuItem value="standard">Standard</MenuItem>
                <MenuItem value="deluxe">Deluxe</MenuItem>
                <MenuItem value="suites">Suites</MenuItem>
                <MenuItem value="executive">Executive</MenuItem>
                <MenuItem value="luxury">Luxury</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              // error={errors.username ? "error" : ""}
              // helperText={errors.username}
              type="number"
              id="floor_number"
              name="floor_number"
              placeholder="Enter floor number"
              onChange={handleChange}
              label="Floor number"
              variant="outlined"
              value={data.floor_number}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ mb: 1, minWidth: 210 }}>
              <InputLabel id="demo-multiple-checkbox-label">Facilities</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={roomFacilities}
                onChange={handleFacilitiesChange}
                input={<OutlinedInput label="Name" />}
              >
                {facilities.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ mr: 3 }} onClick={() => submitHandler()}>
              Save
            </Button>
            <Button variant="contained" onClick={() => cancelHandler()}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default AddRoom;
