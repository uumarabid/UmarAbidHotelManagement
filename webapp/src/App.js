// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
// import Form from "./Form";
import AddEmployee from "./AddEmployee";
import LoginForm from "./LoginForm";
import AddRoom from "./AddRoom";
import AddUser from "./AddUser";

function App() {
  return (
    <div className="App">
      {/* <Footer year={2023} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="AddRoom" element={<AddRoom />} />
          <Route path="AddUser" element={<AddUser />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer year={new Date().getFullYear()} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
