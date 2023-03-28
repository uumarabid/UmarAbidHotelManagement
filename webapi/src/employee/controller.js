import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";
import auditEntry from "../utils/audit.js";

export const addEmployee = async (req, res) => {
  let employee = req.body;
  const userId = employee.currentUserId;
  delete employee.currentUserId;

  await insertQuery("employees", employee);
  auditEntry(userId, "add employee");
  res.send("New Employee is added successfully.");
};

export const editEmployee = async (req, res) => {
  const employee = req.body;
  const userId = employee.currentUserId;
  delete employee.currentUserId;

  await updateQuery("employees", employee, `id = ${employee.id}`);
  auditEntry(userId, "edit employee");
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
  let { id, userId } = req.body;
  await deleteQuery("employees", `id = ${id}`);
  auditEntry(userId, "delete employee");
  res.send(true);
};
