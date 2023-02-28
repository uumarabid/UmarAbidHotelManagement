// Create all methods here

import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";

export const addRoom = async (req, res) => {
  const room = req.body;
  await insertQuery("rooms", room);

  res.send("New room is added successfully.");
};

export const editRoom = async (req, res) => {
  const room = req.body;
  await updateQuery("rooms", room, `id = ${room.id}`);
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
  let { id } = req.body;
  await deleteQuery("rooms", `id = ${id}`);
  res.send(true);
};
