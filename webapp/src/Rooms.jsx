import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline, Paper, FormControlLabel, FormGroup } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
const Rooms = () => {
  const theme = createTheme();

  const [personName, setPersonName] = useState(["Oliver Hansen", "Van Henry"]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* come back to put action and method */}

          <FormGroup>
            <legend>
              <h2>Rooms</h2>
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
                  {/* <InputLabel id="roomType-label">Room type</InputLabel>
                  <Select
                    labelId="roomType-label"
                    id="roomType"
                    // value={Room type}
                    label="Room type"
                    // onChange={handleChange}
                    multiple
                  >
                    <MenuItem value={10}>Standard</MenuItem>
                    <MenuItem value={20}>Deluxe</MenuItem>
                    <MenuItem value={30}>Suites</MenuItem>
                    <MenuItem value={40}>Executive</MenuItem>
                    <MenuItem value={50}>Luxury</MenuItem>
                  </Select> */}

                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <TextField
                  type="text"
                  id="roomType"
                  name="roomType"
                  placeholder="Enter room type"
                  // value={values.lname}
                  // onChange={handleChange}
                  label="Room type"
                  variant="outlined"
                /> */}
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
                <TextField
                  // error={errors.email ? "error" : ""}
                  // helperText={errors.email}
                  type="text"
                  id="text"
                  name="email"
                  placeholder="Facilities"
                  // value={values.email}
                  // onChange={handleChange}
                  label="Facilities"
                  variant="outlined"
                />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Fridge" />
                <FormControlLabel control={<Checkbox />} label="Dinning table & chair" />
                <FormControlLabel control={<Checkbox />} label="locker" />
                <FormControlLabel control={<Checkbox />} label="TV" />
                <FormControlLabel control={<Checkbox />} label="Hair dryer" />

                {/* <TextField
                  // error={errors.email ? "error" : ""}
                  // helperText={errors.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  // value={values.email}
                  // onChange={handleChange}
                  label="Email"
                  variant="outlined"
                /> */}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  // error={errors.password ? "error" : ""}
                  // helperText={errors.password}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  // value={values.password}
                  // onChange={handleChange}
                  label="Password"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  // error={errors.password2 ? "error" : ""}
                  // helperText={errors.password2}
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm your password"
                  // value={values.password2}
                  // onChange={handleChange}
                  label="Confirm password"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Add room
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <span>
                  Already have an account? Login <a href="/login">here</a>
                </span>
              </Grid>
            </Grid>
          </FormGroup>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Rooms;
