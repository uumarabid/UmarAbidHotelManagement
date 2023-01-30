// Create all methods here

import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";

export const addEmployee = async (req, res) => {
  let employee = {
    first_name: "Sikandar",
    last_name: "Butt",
    address: "House 123, Manchester",
    phone: 123456789,
    personal_email: "sikandar@test.com",
    company_email: "sikandar@hotel.com",
  };
  await insertQuery("employees", employee);
  res.send("New Employee is added successfully.");
};

export const editEmployee = async (req, res) => {
  let employee = {
    first_name: "Sikandaer",
    last_name: "Butt sahab",
    address: "House 123, Manchester",
    phone: 123456789,
    personal_email: "sikandar@test.com",
    company_email: "sikandar@hotel.com",
  };
  await updateQuery("employees", employee, `id = 3`);
  res.send("Updated successfully.");
};

export const getEmployee = async (req, res) => {
  let employee = await selectQuery("employees", `id = 1`);
  res.send(employee);
};

export const getAllEmployee = async (req, res) => {
  let employees = await selectQuery("employees");
  res.send(employees);
};

export const deleteEmployee = async (req, res) => {
  await deleteQuery("employees", "id = 1");
  res.send(true);
};
