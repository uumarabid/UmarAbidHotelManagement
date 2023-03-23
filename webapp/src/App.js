// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login/index";
import Room from "./pages/room/index";
import AddRoom from "./pages/room/addRoom";
import User from "./pages/user/index";
import AddUser from "./pages/user/addUser";
import Employee from "./pages/employee/index";
import AddEmployee from "./pages/employee/addEmployee";
import Dashboard from "./pages/dashboard/index";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Checkin from "./pages/booking/checkin";
import Audit from "./pages/audit/index";
import Checkout from "./pages/booking/checkout";
import Reservation from "./pages/reservation/index";
import Guest from "./pages/guest/index";
import { Container, CssBaseline } from "@mui/material";
import Profile from "./pages/profile";
import AddReservation from "./pages/reservation/addReservation";
import AddGuest from "./pages/guest/addGuest";
import Booking from "./pages/booking/index";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Cookies from "universal-cookie";
import Logout from "./pages/logout";
import Skiplink from "./components/skiplink";
const cookies = new Cookies();

function App() {
  const theme = createTheme();
  const token = cookies.get("TOKEN");
  return (
    <div className="App">
      <BrowserRouter>
        <Skiplink />
        <NavigationBar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" width="auto">
            <Routes>
              <Route path="/" exact element={<Login />} />

              {token && <Route path="/dashboard" element={<Dashboard />} />}
              {token && <Route path="/login" element={<Login />} />}
              {token && <Route path="/logout" element={<Logout />} />}
              {token && <Route path="/addEmployee/:id" element={<AddEmployee />} />}
              {token && <Route path="/addEmployee/" element={<AddEmployee />} />}
              {token && <Route path="/addRoom/:id" element={<AddRoom />} />}
              {token && <Route path="/addRoom" element={<AddRoom />} />}
              {token && <Route path="/addUser/:id" element={<AddUser />} />}
              {token && <Route path="/addUser/" element={<AddUser />} />}
              {token && <Route path="/addReservation/" element={<AddReservation />} />}
              {token && <Route path="/room" element={<Room />} />}
              {token && <Route path="/user" element={<User />} />}
              {token && <Route path="/employee" element={<Employee />} />}
              {token && <Route path="/reservation" element={<Reservation />} />}
              {token && <Route path="/addReservation/:id" element={<AddReservation />} />}
              {token && <Route path="/guest" element={<Guest />} />}
              {token && <Route path="/addGuest" element={<AddGuest />} />}
              {token && <Route path="/addGuest/:id" element={<AddGuest />} />}
              {token && <Route path="/audit" element={<Audit />} />}
              {token && <Route path="/checkin" element={<Checkin />} />}
              {token && <Route path="/checkout" element={<Checkout />} />}
              {token && <Route path="/checkout/:id" element={<Checkout />} />}
              {token && <Route path="/profile" element={<Profile />} />}
              {token && <Route path="/booking" element={<Booking />} />}
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
