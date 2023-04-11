import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Audit = () => {
  const [data, setData] = useState([]);

  const loadAudit = () => {
    axios.get("http://localhost:3001/audit/getAll").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    loadAudit();
  }, []);

  return (
    <Paper id="mainContent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <TableContainer>
        <Table sx={{ minWidth: 550 }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>User id</TableCell>
              <TableCell>Operation</TableCell>
              <TableCell>Operation date & time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.user_id}</TableCell>
                <TableCell>{item.operation}</TableCell>
                <TableCell>
                  {new Date(item.operation_date_time).toLocaleDateString()} {new Date(item.operation_date_time).toTimeString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Audit;
