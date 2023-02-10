// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/index";
import Room from "./pages/room/index";
import AddRoom from "./pages/room/AddRoom";
import User from "./pages/user/index";
import AddUser from "./pages/user/AddUser";
import Employee from "./pages/employee/index";
import AddEmployee from "./pages/employee/AddEmployee";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="addRoom" element={<AddRoom />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="room" element={<Room />} />
          <Route path="user" element={<User />} />
          <Route path="employee" element={<Employee />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer year={new Date().getFullYear()} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
