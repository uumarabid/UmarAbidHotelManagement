import { deleteQuery, insertQuery, selectCustomQuery, selectQuery, updateQuery } from "../../utils/sql.js";
import auditEntry from "../utils/audit.js";

// Create all methods here
export const loginGet = async (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};
export const loginPost = async (req, res) => {
  let { user_name, password } = req.body;
  let users = await selectQuery("users", `user_name = '${user_name}' AND password = '${password}'`);
  if (users.length > 0) {
    req.session.user = users;
    console.log(req.session.user);
    res.send(users);
  } else {
    res.send({ message: "User doesn't exists" });
  }
};

export const addUser = async (req, res) => {
  const user = req.body;
  await insertQuery("users", user);
  auditEntry(1, "add user");
  res.send("New User is added successfully.");
};

export const editUser = async (req, res) => {
  const user = req.body;
  await updateQuery("users", user, `id = ${user.id}`);
  auditEntry(1, "edit user");
  res.send("Updated successfully.");
};

export const getUser = async (req, res) => {
  let { id } = req.query;
  let users = await selectQuery("users", `id = ${id}`);

  res.send(users);
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
  auditEntry(1, "delete user");
  res.send(true);
};
