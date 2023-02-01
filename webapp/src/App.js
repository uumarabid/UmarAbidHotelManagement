import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
// import Form from "./Form";
import FormSignUp from "./FormSignUp";
import LoginForm from "./LoginForm";
import Rooms from "./Rooms";

function App() {
  return (
    <div className="App">
      {/* <Footer year={2023} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<FormSignUp />} />
          <Route path="room" element={<Rooms />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer year={new Date().getFullYear()} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
