import React, { useState, useEffect } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Link } from "@mui/material";
import { Link as RLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Reservation = () => {
  const [data, setData] = useState([]);

  const loadReservations = () => {
    //retrive and display data in table
    axios.get("http://localhost:3001/reservation/getAll").then((response) => {
      setData(response.data);
    });
  };

  const deleteReservation = (id) => {
    axios.post("http://localhost:3001/reservation/delete", { id }).then((response) => {
      loadReservations();
    });
  };

  useEffect(() => {
    loadReservations();
  }, []);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Button type="submit" variant="contained">
        <Link href="/AddReservation" underline="none" color="inherit">
          Add Reservation
        </Link>
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Guest name</TableCell>
              <TableCell>Room number</TableCell>
              <TableCell>Check in</TableCell>
              <TableCell>Check out</TableCell>
              <TableCell>Cost </TableCell>
              <TableCell>extra</TableCell>
              <TableCell>deposit</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.guest_name}</TableCell>
                <TableCell>{item.room_number}</TableCell>
                <TableCell>{item.reservation_check_in_date}</TableCell>
                <TableCell>{item.reservation_check_out_date}</TableCell>
                <TableCell>£{item.total_cost}</TableCell>
                <TableCell>{item.extra_cost}</TableCell>
                <TableCell>£{item.deposit}</TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    <RLink to={`/addreservation/${item.id}`} className="App-navigation">
                      Edit
                    </RLink>
                  </Button>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => deleteReservation(item.id)}>
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

export default Reservation;
