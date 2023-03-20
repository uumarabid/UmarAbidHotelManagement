import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Container, Grid, CssBaseline, Paper, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import validateInfo from "./validateInfo";
import axios from "axios";
import Cookies from "universal-cookie";

// this one is discarded.
//https://medium.com/@gsandamali30/jwt-based-user-authentication-using-reactjs-node-express-and-mysql-41b5bedde11f
//https://github.com/gsandamali/Part-2-User-registration-and-login-with-Cookies-Sessions-Hashing/blob/main/server/index.js

// using following for login
// https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/#section-2-how-to-build-the-frontend
// front-end: https://github.com/EBEREGIT/react-auth
// back-end: https://github.com/EBEREGIT/auth-backend
const defaultData = {
  user_name: "",
  password: "",
};

export const Login = () => {
  // axios.defaults.withCredentials = true;
  const cookies = new Cookies();
  const theme = createTheme();
  const [data, setData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(defaultData);

  const handleChange = (e) => {
    setData({
      //spread operator--spreading the values first
      ...data,
      // targetting the name of each input of the form on FormSignUp
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const SubmitHandler = () => {
    const { errors, hasError } = validateInfo(data);
    setFormErrors(errors);

    if (!hasError) {
      axios.post(`http://localhost:3001/user/login`, data).then((response) => {
        console.log(response.data);
        if (response.data) {
          cookies.set("TOKEN", response.data.token, {
            path: "/",
          });
        } else {
          setFormErrors({ user_name: "wrong username/password", password: "wrong username/password" });
        }
      });
      window.location.href = "/dashboard";
      //navigate("/dashboard");
    }
  };

  useEffect(() => {
    // axios.get(`http://localhost:3001/user/login`, data).then((response) => {
    //   console.log(response.data);
    //   if (response.data) {
    //     // login
    //   } else {
    //     setFormErrors({ user_name: "wrong username/password", password: "wrong username/password" });
    //   }
    // });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <FormGroup>
            <legend>
              <h2>Welcome to login page</h2>
            </legend>
            <Grid container rowSpacing={1}>
              <Grid item xs={4}>
                <label>Username</label>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  // error={formErrors.user_name ? true : false}
                  // helperText={formErrors.user_name}
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Enter your username"
                  label="username"
                  variant="outlined"
                  value={data.user_name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={4}>
                <label>Password</label>
              </Grid>

              <Grid item xs={8}>
                <TextField
                  // error={formErrors.password ? true : false}
                  // helperText={formErrors.password}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  label="Password"
                  variant="outlined"
                  value={data.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" onClick={() => SubmitHandler()}>
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </FormGroup>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
