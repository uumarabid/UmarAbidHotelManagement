import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  CssBaseline,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Link,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

// destructing in FormSignUp function
const User = () => {
  const theme = createTheme();

  const [data, setData] = useState([]);

  useEffect(() => {
    //retrive and display data in table
    axios.get("http://localhost:3001/user/getAll").then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" width="auto">
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
                  <TableCell>Employee id</TableCell>
                  {/* Fix is_admin cell */}
                  <TableCell>Is admin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.user_name}</TableCell>
                    <TableCell>{item.password}</TableCell>
                    <TableCell>{item.employee_id}</TableCell>
                    {/* come back to fix is admin */}
                    <TableCell>{item.is_admi}</TableCell>
                    <TableCell>
                      <Button type="submit" variant="contained" sx={{ mr: 1 }}>
                        Edit
                      </Button>
                      <Button type="submit" variant="contained">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default User;
