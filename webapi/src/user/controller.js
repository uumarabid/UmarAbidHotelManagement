import { deleteQuery, insertQuery, selectQuery, updateQuery } from "../../utils/sql.js";

// Create all methods here

export const addUser = async (req, res) => {
  let user = {
    user_name: "sikandar",
    password: "sikandar",
    employee_id: 3,
    is_admin: "",
  };

  await insertQuery("users", user);
  res.send("New User is added successfully.");
};

export const editUser = async (req, res) => {
  const user = req.body;
  // let user = {
  //   id: 0,
  //   user_name: "sikandar",
  //   password: "sikandarrrr",
  //   employee_id: 2,
  //   is_admin: 0,
  // };
  await updateQuery("users", user, `id = ${user.id}`);
  res.send("Updated successfully.");
};

export const getUser = async (req, res) => {
  let { id } = req.query;
  let user = await selectQuery("users", `id = ${id}`);
  res.send(user);
};

export const getAllUser = async (req, res) => {
  let users = await selectQuery("users");
  res.send(users);
};

export const deleteUser = async (req, res) => {
  let { id } = req.body;
  await deleteQuery("users", `id = ${id}`);
  res.send(true);
};
