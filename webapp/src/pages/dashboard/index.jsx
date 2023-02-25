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

const bull = <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}></Box>;
const Dashboard = () => {
  // let navigate = useNavigate();

  return (
    <>
      <Card variant="outlined" sx={{ boxShadow: 3, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Hotel Managment
                </Typography>
                <Typography variant="h4" component="div">
                  Employee{bull}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h4" component="div">
                  User{bull}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  Room{bull}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Card sx={{ minWidth: 350, m: 1, boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Dashboard;
