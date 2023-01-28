import { selectQuery } from "../../utils/sql.js";

// Create all methods here

export const addUser = async (req, res) => {
  res.send("New User is added successfully.");
};

export const editUser = (req, res) => {
  res.send("Updated successfully.");
};

export const getUser = async (req, res) => {
  let user = await selectQuery("users", "id = 1");
  res.send(user);
};

export const getAllUser = async (req, res) => {
  let users = await selectQuery("users");
  res.send(users);
};

export const deleteUser = async (req, res) => {
  await deleteUser("users");
  res.send(true);
};
