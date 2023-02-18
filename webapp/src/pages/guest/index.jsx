import React, { useState, useEffect } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Link } from "@mui/material";
import { Link as RLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Guest = () => {
  const [data, setData] = useState([]);

  const loadGuests = () => {
    //retrive and display data in table
    axios.get("http://localhost:3001/guest/getAll").then((response) => {
      setData(response.data);
    });
  };

  const deleteGuest = (id) => {
    axios.post("http://localhost:3001/guest/delete", { id }).then((response) => {
      loadGuests();
    });
  };

  useEffect(() => {
    loadGuests();
  }, []);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      {/* <Button type="submit" variant="contained">
        <Link href="/AddGuest" underline="none" color="inherit">
          Add Guest
        </Link>
      </Button> */}
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell># of Guests </TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Check in</TableCell>
              <TableCell>Check out</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.number_of_guests}</TableCell>
                <TableCell>{item.phone_number}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.check_in_date}</TableCell>
                <TableCell>{item.check_out_date}</TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    <RLink to={`/addguest/${item.id}`} className="App-navigation">
                      Edit
                    </RLink>
                  </Button>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => deleteGuest(item.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Guest;
