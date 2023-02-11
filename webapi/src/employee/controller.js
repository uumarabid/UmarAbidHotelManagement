// Create all methods here

import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";

export const addEmployee = async (req, res) => {
  let employee = req.body;
  await insertQuery("employees", employee);
  res.send("New Employee is added successfully.");
};

export const editEmployee = async (req, res) => {
  const employee = req.body;
  await updateQuery("employees", employee, `id = ${employee.id}`);
  res.send("Updated successfully.");
};

export const getEmployee = async (req, res) => {
  let { id } = req.query;
  let employee = await selectQuery("employees", `id = ${id}`);
  res.send(employee);
};

export const getAllEmployee = async (req, res) => {
  let employees = await selectQuery("employees");
  res.send(employees);
};

export const deleteEmployee = async (req, res) => {
  let { id } = req.body;
  await deleteQuery("employees", `id = ${id}`);
  res.send(true);
};
