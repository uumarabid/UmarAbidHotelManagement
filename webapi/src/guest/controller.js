import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";
import auditEntry from "../utils/audit.js";

export const addGuest = async (req, res) => {
  let guest = req.body;
  const userId = guest.currentUserId;
  delete guest.currentUserId;
  await insertQuery("guests", guest);
  auditEntry(userId, "add guests");
  res.send("New Guest is added successfully.");
};

export const editGuest = async (req, res) => {
  const guest = req.body;
  const userId = guest.currentUserId;
  delete guest.currentUserId;
  await updateQuery("guests", guest, `id = ${guest.id}`);
  auditEntry(userId, "edit guests");
  res.send("Updated successfully.");
};

export const getGuest = async (req, res) => {
  let { id } = req.query;
  let guest = await selectQuery("guests", `id = ${id}`);
  res.send(guest);
};

export const getAllGuest = async (req, res) => {
  let guests = await selectQuery("guests");
  res.send(guests);
};

export const deleteGuest = async (req, res) => {
  let { id, userId } = req.body;
  await deleteQuery("guests", `id = ${id}`);
  auditEntry(userId, "delete guests");
  res.send(true);
};
