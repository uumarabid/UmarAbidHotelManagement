// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login/index";
import Room from "./pages/room/index";
import AddRoom from "./pages/room/AddRoom";
import User from "./pages/user/index";
import AddUser from "./pages/user/AddUser";
import Employee from "./pages/employee/index";
import AddEmployee from "./pages/employee/AddEmployee";
import Dashboard from "./pages/dashboard/index";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Checkin from "./pages/checkin/index";
import Audit from "./pages/audit/index";
import Checkout from "./pages/checkout/index";
import { Container, CssBaseline } from "@mui/material";
import Profile from "./pages/profile";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" width="auto">
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/addRoom" element={<AddRoom />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/room" element={<Room />} />
              <Route path="/user" element={<User />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/checkin" element={<Checkin />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        </ThemeProvider>{" "}
      </BrowserRouter>

      <Footer year={new Date().getFullYear()} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
