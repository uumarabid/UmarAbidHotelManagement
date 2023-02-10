import React, { useState } from "react";

import { Button, TextField, Grid, Paper, FormControlLabel, FormGroup } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

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

// destructing in FormSignUp function
const AddRoom = () => {
  const [roomFacilities, setRoomFacilities] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRoomFacilities(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <FormGroup>
        <legend>
          <h2>Add room</h2>
        </legend>
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <TextField
              type="number"
              id="roomNumber"
              name="roomNumber"
              placeholder="Enter room number"
              label="Room number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ mb: 1, minWidth: 210 }}>
              <InputLabel id="roomType-label">Room type</InputLabel>
              <Select
                labelId="roomType-label"
                id="roomType"
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
              // error={errors.username ? "error" : ""}
              // helperText={errors.username}
              type="number"
              id="floorNumber"
              name="floorNumber"
              placeholder="Enter floor number"
              // value={values.username}
              // onChange={handleChange}
              label="Floor number"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ mb: 1, minWidth: 210 }}>
              <InputLabel id="demo-multiple-checkbox-label">Facilities</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={roomFacilities}
                label="Facilities"
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {facilities.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={roomFacilities.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ mr: 3 }}>
              Add room
            </Button>
            <Button type="submit" variant="contained">
              <Link href="/room" underline="none" color="inherit">
                {"Cancel"}
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default AddRoom;
