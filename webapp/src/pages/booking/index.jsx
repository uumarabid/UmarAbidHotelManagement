import React, { useState } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";
import { Link as RLink } from "react-router-dom";

// const formatFacilities = (facilities) => {
//   const list = facilities.split(",");
//   return (
//     <ul>
//       {list.map((item) => {
//         return <li key={item}>{item}</li>;
//       })}
//     </ul>
//   );
// };

const Booking = () => {
  const [data, setData] = useState([]);

  const loadBookings = () => {
    axios.get("http://localhost:3001/booking/getAll").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <Paper id="mainContent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Button variant="contained">
        <RLink to="/checkin" underline="none" color="inherit" className="App-navigation">
          {"Add booking"}
        </RLink>
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Guests</TableCell>
              <TableCell>Rooms</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Checkin date</TableCell>
              <TableCell>Checkout date</TableCell>
              <TableCell>Total cost</TableCell>
              <TableCell>Extra cost</TableCell>
              <TableCell>Deposit</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  {item.first_name}, {item.last_name}
                </TableCell>
                <TableCell>{item.room_number}</TableCell>
                <TableCell>{item.room_type}</TableCell>
                <TableCell>{new Date(item.check_in_date).toLocaleDateString()}</TableCell>
                <TableCell>{item.check_out_date ? new Date(item.check_out_date).toLocaleDateString() : ""}</TableCell>
                <TableCell>{item.total_cost}</TableCell>
                <TableCell>{item.extra_cost}</TableCell>
                <TableCell>{item.deposit}</TableCell>
                {/* <TableCell>{formatFacilities(item.facilities)}</TableCell> */}
                <TableCell>
                  <Button variant="contained" sx={{ m: 1, display: "flex", flexDirection: "row" }}>
                    <RLink to={`/checkout/${item.id}`} className="App-navigation">
                      Checkout
                    </RLink>
                  </Button>
                  {/* <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteBooking(item.id)}
                  >
                    Delete
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Booking;
