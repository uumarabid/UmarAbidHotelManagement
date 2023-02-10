import React, { useState } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";

// destructing in FormSignUp function
const Room = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //retrive and display data in table
    axios.get("http://localhost:3001/room/getAll").then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Button type="submit" variant="contained">
        <Link href="/AddRoom" underline="none" color="inherit">
          {"Add room"}
        </Link>
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Room number</TableCell>
              <TableCell>Room type</TableCell>
              <TableCell>Floor number</TableCell>
              <TableCell>Facilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.room_number}</TableCell>
                <TableCell>{item.room_type}</TableCell>
                <TableCell>{item.floor_number}</TableCell>
                <TableCell>{item.facilities}</TableCell>
                <TableCell>
                  <Button type="submit" variant="contained" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button type="submit" variant="contained" color="error" startIcon={<DeleteIcon />}>
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

export default Room;
