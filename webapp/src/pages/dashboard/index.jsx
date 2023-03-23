// import react from "react";
// import { useNavigate, useParams } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const bull = <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}></Box>;
const defaultData = [{ employees: 0, reservations: 0, bookings: 0, rooms: 0, users: 0 }];
const Dashboard = () => {
  const [data, setData] = React.useState(defaultData);

  const loadDashboard = () => {
    //retrive and display data in table
    axios.get("http://localhost:3001/dashboard/get").then((response) => {
      setData(response.data[0]);
    });
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <>
      <Card id="maincontent" variant="outlined" sx={{ boxShadow: 3, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Current
                </Typography>
                <Typography variant="h4" component="div">
                  Bookings
                  <br />
                  {data.bookings}
                  <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Current
                </Typography>
                <Typography variant="h4" component="div">
                  Reservations
                  <br />
                  {data.reservations}
                  <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Total
                </Typography>
                <Typography variant="h4" component="div">
                  Rooms
                  <br />
                  {data.rooms}
                  <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Total
                </Typography>
                <Typography variant="h4" component="div">
                  Employees
                  <br />
                  {data.employees}
                  <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Total
                </Typography>
                <Typography variant="h4" component="div">
                  Users
                  <br />
                  {data.users}
                  <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Dashboard;
