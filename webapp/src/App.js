// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
// import Form from "./Form";
import AddEmployee from "./AddEmployee";
import LoginForm from "./LoginForm";
import AddRoom from "./AddRoom";
import AddUser from "./AddUser";
import Room from "./Room";

function App() {
  return (
    <div className="App">
      {/* <Footer year={2023} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="addRoom" element={<AddRoom />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="room" element={<Room />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer year={new Date().getFullYear()} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
