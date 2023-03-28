import auditEntry from "../utils/audit.js";

import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";

export const addRoom = async (req, res) => {
  const room = req.body;
  const userId = room.currentUserId;
  delete room.currentUserId;

  await insertQuery("rooms", room);
  auditEntry(userId, "add room");
  res.send("New room is added successfully.");
};

export const editRoom = async (req, res) => {
  const room = req.body;
  const userId = room.currentUserId;
  delete room.currentUserId;

  await updateQuery("rooms", room, `id = ${room.id}`);
  auditEntry(userId, "edit room");

  res.send("Updated successfully.");
};

export const getRoom = async (req, res) => {
  let { id } = req.query;
  let room = await selectQuery("rooms", `id = ${id}`);
  res.send(room);
};

export const getAllRoom = async (req, res) => {
  let rooms = await selectQuery("rooms");
  res.send(rooms);
};

export const deleteRoom = async (req, res) => {
  let { id, userId } = req.body;
  await deleteQuery("rooms", `id = ${id}`);
  auditEntry(userId, "delete room");
  res.send(true);
};
