import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import "@fontsource/roboto/300.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// axios webapi call notes:

/// for a post call
// import axios from "axios";
// let testData = {
//   first_name: "Dan",
//   last_name: "abcd",
//   address: "House 8, Manchester",
//   phone: 123456789,
//   personal_email: "yasir@test.com",
//   company_email: "yasir@hotel.com",
// };

// const addEmployee = () => {
//   axios.post("http://localhost:3001/employee/add", testData).then((response) => {
//     console.log(response.data);
//   });
// };

/// for a get call
// import axios from "axios";
// const getAllEmployees = () => {
//   axios.get("http://localhost:3001/employee/getall").then((response) => {
//     console.log(response.data);
//     //setTest(response.data);
//   });
// };
