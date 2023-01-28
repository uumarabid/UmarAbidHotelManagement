import { selectQuery } from "../../utils/sql.js";

// Create all methods here

export const addUser = (req, res) => {
  res.send("New User is added successfully.");
};

export const editUser = (req, res) => {
  res.send("Updated successfully.");
};

export const getUser = (req, res) => {
  let user = selectQuery("user", { id: 1 });
  res.send(user);
};

export const getAllUser = (req, res) => {
  res.send("All data in Users table is.... ");
};

export const deleteUser = (req, res) => {
  res.send("Successfully deleted.");
};
