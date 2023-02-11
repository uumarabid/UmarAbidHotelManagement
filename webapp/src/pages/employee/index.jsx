import React, { useState } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Link } from "@mui/material";
import { Link as RLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";

const Employee = () => {
  const [data, setData] = useState([]);

  const loadEmployees = () => {
    //retrive and display data in table
    axios.get("http://localhost:3001/employee/getAll").then((response) => {
      setData(response.data);
    });
  };

  const deleteEmployee = (id) => {
    axios.post("http://localhost:3001/employee/delete", { id }).then((response) => {
      loadEmployees();
    });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Button type="submit" variant="contained">
        <Link href="/AddEmployee" underline="none" color="inherit">
          Add employee
        </Link>
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Personal email</TableCell>
              <TableCell>Conpany email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.personal_email}</TableCell>
                <TableCell>{item.company_email}</TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    <RLink to={`/addemployee/${item.id}`} className="App-navigation">
                      Edit
                    </RLink>
                  </Button>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => deleteEmployee(item.id)}>
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

export default Employee;
