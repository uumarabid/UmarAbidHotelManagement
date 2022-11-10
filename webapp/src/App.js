import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Form from "./Form";
import FormSignUp from "./FormSignUp";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<FormSignUp />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Form /> */}
    </div>
  );
}

export default App;
