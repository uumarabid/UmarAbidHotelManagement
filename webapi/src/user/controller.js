import { deleteQuery, insertQuery, selectCustomQuery, selectQuery, updateQuery } from "../../utils/sql.js";
import auditEntry from "../utils/audit.js";
import jwt from "jsonwebtoken";
// Create all methods here

export const loginPost = async (req, res) => {
  let { user_name, password } = req.body;
  let users = await selectQuery("users", `user_name = '${user_name}' AND password = '${password}'`);
  if (users.length > 0) {
    const token = jwt.sign(
      {
        user_id: users[0].id,
        user_name: users[0].user_name,
      },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );

    res.send({ message: "login success", username: users[0].user_name, token });
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
