import React, { useState } from "react";

import { Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";
import { Link as RLink } from "react-router-dom";

// destructing in FormSignUp function
const User = () => {
  const [data, setData] = useState([]);

  // load users
  const loadUsers = () => {
    axios.get("http://localhost:3001/user/getAll").then((response) => {
      setData(response.data);
    });
  };

  //delete user
  const deleteUser = (id) => {
    axios.post("http://localhost:3001/user/delete", { id }).then((response) => {
      loadUsers();
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      {/* <Button type="submit" variant="contained">
            <a href="/AddUser">Add user</a>
          </Button> */}
      <Button type="submit" variant="contained">
        <Link href="/AddUser" underline="none" color="inherit">
          {"Add user"}
        </Link>
        {/* <a href="/AddUser">Add user</a> */}
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>User name</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Employee Name</TableCell>
              {/* Fix is_admin cell */}
              <TableCell>Is admin</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.user_name}</TableCell>
                <TableCell>{item.password}</TableCell>
                <TableCell>{item.employee_name}</TableCell>
                {/* come back to fix is admin */}
                <TableCell>{item.is_admin.data[0]}</TableCell>
                <TableCell>
                  <Button type="submit" variant="contained" sx={{ mr: 1 }}>
                    <RLink to={`/addUser/${item.id}`} className="App-navigation">
                      {"Edit"}
                    </RLink>
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUser(item.id)}
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

export default User;
