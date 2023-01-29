// Create all methods here

import { selectQuery, deleteQuery } from "../../utils/sql.js";

export const addEmployee = (req, res) => {
  res.send("New Employee is added successfully.");
};

export const editEmployee = (req, res) => {
  res.send("Updated successfully.");
};

export const getEmployee = async (req, res) => {
  let Employee = await selectQuery("Employees", "id = 1");
  res.send(Employee);
};

export const getAllEmployee = async (req, res) => {
  let Employees = await selectQuery("Employees");
  res.send(Employees);
};

export const deleteEmployee = async (req, res) => {
  await deleteQuery("Employees", "id = 1");
  res.send(true);
};
