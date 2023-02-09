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
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";

const Employee = () => {
  const theme = createTheme();

  const [data, setData] = useState([]);

  useEffect(() => {
    //retrive and display data in table
    axios.get("http://localhost:3001/employee/getAll").then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" width="auto">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Button type="submit" variant="contained">
            <Link href="/AddEmployee" underline="none" color="inherit">
              {"Add employee"}
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
      </Container>
    </ThemeProvider>
  );
};

export default Employee;
