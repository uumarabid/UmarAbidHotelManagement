// Create all methods here

import { selectQuery, deleteQuery } from "../../utils/sql.js";

export const addRoom = (req, res) => {
  res.send("New room is added successfully.");
};

export const editRoom = (req, res) => {
  res.send("Updated successfully.");
};

export const getRoom = async (req, res) => {
  let room = await selectQuery("rooms", "id = 1");
  res.send(room);
};

export const getAllRoom = async (req, res) => {
  let rooms = await selectQuery("rooms");
  res.send(rooms);
};

export const deleteRoom = async (req, res) => {
  await deleteQuery("rooms", "id = 1");
  res.send(true);
};
