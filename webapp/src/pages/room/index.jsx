import React, { useState } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";
import { Link as RLink } from "react-router-dom";

const formatFacilities = (facilities) => {
  const list = facilities.split(",");
  return (
    <ul>
      {list.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

const Room = () => {
  const [data, setData] = useState([]);

  const loadRooms = () => {
    axios.get("http://localhost:3001/room/getAll").then((response) => {
      setData(response.data);
    });
  };

  const deleteRoom = (id) => {
    axios.post("http://localhost:3001/room/delete", { id }).then((response) => {
      loadRooms();
    });
  };

  useEffect(() => {
    loadRooms();
  }, []);

  return (
    <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.room_number}</TableCell>
                <TableCell>{item.room_type}</TableCell>
                <TableCell>{item.floor_number}</TableCell>
                <TableCell>{formatFacilities(item.facilities)}</TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    <RLink to={`/addRoom/${item.id}`} className="App-navigation">
                      Edit
                    </RLink>
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteRoom(item.id)}
                  >
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
