import { insertQuery, selectQuery, updateQuery } from "../../utils/sql.js";

// Create all methods here

export const addUser = async (req, res) => {
  let user = {
    user_name: "sikandar",
    password: "sikandar",
    employee_id: `employees.id`,
    is_admin: "",
  };

  await insertQuery("users", user);
  res.send("New User is added successfully.");
};

export const editUser = async (req, res) => {
  let user = {
    user_name: "sikandar",
    password: "sikandarrrr",
    employee_id: employees.id,
    is_admin: 0,
  };
  await updateQuery("users", user, `id = 3`);
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
