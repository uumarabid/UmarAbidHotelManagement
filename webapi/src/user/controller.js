import { deleteQuery, insertQuery, selectCustomQuery, selectQuery, updateQuery } from "../../utils/sql.js";

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
  await updateQuery("users", user, `id = ${user.id}`);
  res.send("Updated successfully.");
};

export const getUser = async (req, res) => {
  let { id } = req.query;
  let user = await selectQuery("users", `id = ${id}`);
  res.send(user);
};

export const getAllUser = async (req, res) => {
  const query = `SELECT u.*, CONCAT(e.first_name, ', ', e.last_name) as employee_name 
                  FROM users u INNER JOIN employees e ON u.employee_id = e.id`;
  let users = await selectCustomQuery(query);

  res.send(users);
};

export const deleteUser = async (req, res) => {
  let { id } = req.body;
  await deleteQuery("users", `id = ${id}`);
  res.send(true);
};
